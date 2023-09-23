const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;
buttonStop.disabled = true;


function onButtonStart() {
    bodyEl.style.backgroundColor = getRandomHexColor();

    timerId = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor();   
    }, 1000);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
};

function onButtonStop() {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

buttonStart.addEventListener('click', onButtonStart);
buttonStop.addEventListener('click', onButtonStop);
