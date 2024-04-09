import { registerRawHelper } from "discourse-common/lib/helpers";
import { htmlSafe } from "@ember/template";

registerRawHelper("custom-date", customDate);

export default function customDate(date) {
  let formatted_data = moment(date).format(I18n.t("dates.tiny.date_month"));

  return htmlSafe(
    "<span class='relative-date' data-time='" +
      date.getTime() +
      "'>" +
      formatted_data +
      "</span>"
  );
}
