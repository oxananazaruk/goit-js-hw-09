import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonStart = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');

 const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectedDate = selectedDates[0].getTime();
    const CurrentDate = Date.nov();

    if (selectedDate <= CurrentDate) {
      alert('Please choose a date in the future');
    } else {
buttonStart.disabled = false;
    }
   },
};

flatpickr("#datetime-picker", options);

 

function onSelectDate(event) {
   
};

inputEl.addEventListener('input', onSelectDate)