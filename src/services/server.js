import axios from "axios";
import colors from "colors";

class Server {
  constructor() {}

  async getData() {
    try {
      const endpointDatabase =
        "https://raw.githubusercontent.com/zuydd/database/main/blum.json";
      const { data } = await axios.get(endpointDatabase);
      return data;
    } catch (error) {
      console.log(colors.red("Retrieving data from server failed"));
      return null;
    }
  }

  async showNoti() {
    const database = await this.getData();
    if (database && database.noti) {
      console.log(colors.blue("📢 Notifications from the system"));
      console.log(colors.white("Not found"));
      console.log("");
    }
  }

  async checkVersion(curentVersion, database = null) {
    if (!database) {
      database = await this.getData();
    }

    if (database && curentVersion !== database.ver) {
      console.log(
        colors.yellow(
          `🚀 A new version is available ${colors.blue(
            database.ver
          )}, Download now here 👉 ${colors.blue(
            "https://github.com/secretniy"
          )}`
        )
      );
      console.log("");
    }
  }
}

const server = new Server();
export default server;
