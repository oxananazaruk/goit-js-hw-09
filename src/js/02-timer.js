import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
     Notify.failure('Please choose a date in the future');
    } else {
buttonStart.disabled = false;
    }
   },
};

flatpickr("#datetime-picker", options);

let dateDifference;

function onButtonStart() {
 const timerId = setInterval(() => {
    const celectedDate = new Date(inputEl.value).getTime();
    const currentDate = Date.now();
     dateDifference = celectedDate - currentDate;
    
    const timeCounter = convertMs(dateDifference);

    daysEl.textContent = addLeadingZero(timeCounter.days);
    hoursEl.textContent = addLeadingZero(timeCounter.hours);
    minutesEl.textContent = addLeadingZero(timeCounter.minutes);
    secondsEl.textContent = addLeadingZero(timeCounter.seconds);
 }, 1000);
  
  if (dateDifference === 0) {
    clearInterval(timerId);
}
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
};

function addLeadingZero(value) {
 return value.toString().padStart(2, '0');
};

buttonStart.addEventListener('click', onButtonStart);