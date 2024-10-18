import colors from "colors";
import dayjs from "dayjs";

class FarmingClass {
  constructor() {}

  async startFarming(user) {
    try {
      const { data } = await user.http.post(0, "farming/start", {});
      if (data) {
        user.log.log(
          `Farming has started, waiting for claim later: ${colors.blue("480 minute")}`
        );
        return true;
      } else {
        throw new Error(`Start farming failed: ${data.message}`);
      }
    } catch (error) {
      user.log.logError(
        `Start farming failed: ${error.response?.data?.message}`
      );
      return false;
    }
  }

  async claimFarming(user, balance) {
    try {
      const { data } = await user.http.post(0, "farming/claim", {});
      if (data) {
        user.log.log(
          `Claim farming success, rewards: ${colors.green(
            balance + user.currency
          )}`
        );
        return true;
      } else {
        throw new Error(`Claim farming failed: ${data.message}`);
      }
    } catch (error) {
      user.log.logError(
        `Claim farming failed: ${error.response?.data?.message}`
      );
      return false;
    }
  }

  async handleFarming(user, infoFarming) {
    if (!infoFarming) {
      await this.startFarming(user);
      return 480;
    } else {
      const diffTimeClaim = dayjs().diff(dayjs(infoFarming?.endTime), "minute");

      if (diffTimeClaim > 0) {
        const statusClaim = await this.claimFarming(user, infoFarming?.balance);
        if (statusClaim) {
          await this.startFarming(user);
          return 480;
        } else {
          return 5;
        }
      } else {
        user.log.log(
          `It's not time to claim yet, wait until later: ${colors.blue(
            Math.abs(diffTimeClaim) + " minute"
          )}`
        );
        return Math.abs(diffTimeClaim);
      }
    }
  }
}

const farmingClass = new FarmingClass();
export default farmingClass;
