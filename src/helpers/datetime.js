import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";
dayjs.extend(duration);

class DatetimeHelper {
  constructor() {}

  formatDuration(seconds) {
    const durationObj = dayjs.duration(seconds, "seconds");
    const hours = durationObj.hours();
    const minutes = durationObj.minutes();
    const secs = durationObj.seconds();

    let result = "";

    if (hours > 0) {
      result += `${hours} hour `;
    }

    if (minutes > 0 || hours > 0) {
      result += `${minutes} minute `;
    }

    result += `${secs}s`;

    return result.trim();
  }

  formatTime(seconds) {
    const isNegative = seconds < 0;
    seconds = Math.abs(seconds);

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let result = "";

    if (hours > 0) {
      result += `${hours} hour, `;
    }

    if (minutes > 0 || hours > 0) {
      result += `${minutes} minute, `;
    }

    result += `${remainingSeconds}s`;

    return isNegative ? `-${result.trim()}` : result.trim();
  }
}

const datetimeHelper = new DatetimeHelper();
export default datetimeHelper;
