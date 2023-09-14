const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;
buttonStop.disabled = true;

function startColorsChange() {
    bodyEl.style.backgroundColor = getRandomHexColor(); 
     buttonStart.disabled = true;
    buttonStop.disabled = false;
};

const onButtonStart = () => {
    timerId = setInterval(startColorsChange, 1000);
};

const onButtonStop = () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

buttonStart.addEventListener('click', startColorsChange);
buttonStart.addEventListener('click', onButtonStart);
buttonStop.addEventListener('click', onButtonStop);
