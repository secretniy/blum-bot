import colors from "colors";
import fileHelper from "../helpers/file.js";
import tokenHelper from "../helpers/token.js";

class AuthService {
  constructor() {}

  async login(user, skipLog = false) {
    user.http.updateToken(null);
    user.http.updateRefreshToken(null);
    const body = {
      query: user.query_id,
      referralToken: user?.database?.ref,
    };
    try {
      const { data } = await user.http.post(
        3,
        "auth/provider/PROVIDER_TELEGRAM_MINI_APP",
        body
      );
      if (data?.token) {
        return {
          access: data?.token?.access,
          refresh: data?.token?.refresh,
        };
      }
      return null;
    } catch (error) {
      if (!skipLog) {
        user.log.logError(
          `Login failed: ${error.response?.data?.message}`
        );
      }
      return null;
    }
  }

  async refresh(user, refreshToken, skipLog = false) {
    user.http.updateToken(null);
    user.http.updateRefreshToken(null);
    const body = {
      refresh: refreshToken,
    };
    try {
      const { data } = await user.http.post(1, "auth/refresh", body);
      if (data?.access) {
        return {
          access: data.access,
          refresh: data.refresh,
        };
      }
      return null;
    } catch (error) {
      if (!skipLog) {
        user.log.logError(
          `Refresh token failed: ${error.response?.data?.message}`
        );
      }
      return null;
    }
  }

  async handleLogin(user) {
    console.log(
      `============== Run account ${user.index} | ${user.info.fullName.green} ==============`
    );

    let info = null;
    let token = fileHelper.getTokenById(user.info.id);

    if (token && !tokenHelper.isExpired(token.access)) {
      const info = {
        access: token.access,
        refresh: token.refresh,
      };
      const profile = await this.handleAfterLogin(user, info);
      return {
        status: 1,
        profile,
      };
    }

    // if (token && tokenHelper.isExpired(token.access)) {
    //   info = await this.refresh(user, token.refresh);
    //   if (info) {
    //     const profile = await this.handleAfterLogin(user, info);

    //     return {
    //       status: 1,
    //       profile,
    //     };
    //   }
    // }

    let infoLogin = await this.login(user);

    if (infoLogin) {
      const profile = await this.handleAfterLogin(user, infoLogin);
      return {
        status: 1,
        profile,
      };
    }
    user.log.logError(
      "The login process failed, please check your account information again (you may need to get a new query_id). The system will try to log in again after 60 seconds"
    );
    return {
      status: 0,
      profile: null,
    };
  }

  async getProfile(user) {
    try {
      const { data } = await user.http.get(0, "user/balance");
      if (data) {
        return data;
      }
      return null;
    } catch (error) {
      user.log.logError(
        `Retrieving account information failed: ${error.response?.data?.message}`
      );
      return null;
    }
  }

  async reconnect(user) {
    let info = null;
    let token = fileHelper.getTokenById(user.info.id);

    if (
      token &&
      tokenHelper.isExpired(token.access) &&
      !tokenHelper.isExpired(token.refresh)
    ) {
      info = await this.refresh(user, token.refresh, true);
      if (info) {
        await this.handleAfterReconnect(user, info);
        return 1;
      }
    }

    let infoLogin = await this.login(user, true);

    if (infoLogin) {
      await this.handleAfterReconnect(user, infoLogin);
      return 1;
    }
    
    return 0;
  }

  async handleAfterLogin(user, info) {
    const accessToken = info.access || null;
    const refreshToken = info.refresh || null;
    user.http.updateToken(accessToken);
    user.http.updateRefreshToken(refreshToken);
    fileHelper.saveToken(user.info.id, info);
    const profile = await this.getProfile(user);
    if (profile) {
      user.log.log(
        colors.green("Log in successfully: ") +
          `Balance: ${
            colors.green(Math.round(profile?.availableBalance)) + user.currency
          }`
      );
      if (!user.http.isConnected) {
        user.http.updateConnect(true);
        setInterval(async () => {
          await this.reconnect(user);
        }, 60 * 1000 * 20);
      }
    }
    return profile;
  }

  async handleAfterReconnect(user, info) {
    const accessToken = info.access || null;
    const refreshToken = info.refresh || null;
    user.http.updateToken(accessToken);
    user.http.updateRefreshToken(refreshToken);
    fileHelper.saveToken(user.info.id, info);
    
  }
}

const authService = new AuthService();
export default authService;
