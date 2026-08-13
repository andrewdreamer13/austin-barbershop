import flatpickr from "flatpickr";
import confirmDatePlugin from "flatpickr/dist/plugins/confirmDate/confirmDate";

export function initDatePicker() {
  const dateInput = document.getElementById("appointment-date");
  if (!dateInput) return;

  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(maxSelectableDate.getDate() + 30);

  flatpickr(dateInput, {
    enableTime: true,
    dateFormat: "m/d/Y h:i K",
    minDate: "today",
    // maxDate: maxSelectableDate,
    monthSelectorType: "static",
    minuteIncrement: 30,
    disableMobile: true,

    plugins: [
      new confirmDatePlugin({
        confirmText: "OK",
        showAlways: false,
        theme: "dark",
      }),
    ],
  });
}
