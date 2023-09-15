import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonStart = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

buttonStart.disabled = true;

 const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectedDate = selectedDates[0].getTime();
   const currentDate = Date.now();

    if (selectedDate <= currentDate) {
      alert('Please choose a date in the future');
      inputEl._flatpickr.setDate(new Date());
    } else {
buttonStart.disabled = false;
    }
   },
};

flatpickr("#datetime-picker", options);

function onButtonStart() {
const celectedDate = new Date(inputEl.value).getTime();
  const currentDate = Date.now();
  const dateDifference = celectedDate - currentDate;

  const timeCounter = convertMs(dateDifference);
  console.log(timeCounter);
  setInterval(() => {
    daysEl.textContent = timeCounter.days;
    hoursEl.textContent = timeCounter.hours;
    minutesEl.textContent = timeCounter.minutes;
    secondsEl.textContent = timeCounter.seconds;
  }, 1000);

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



buttonStart.addEventListener('click', onButtonStart);