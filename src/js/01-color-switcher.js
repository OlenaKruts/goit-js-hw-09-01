const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');

let intervalId = null;
btnStart.addEventListener('click', onStartClick);
function onStartClick(event) {
  btnStart.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
btnStop.addEventListener('click', onStopClick);
function onStopClick(event) {
  btnStart.removeAttribute('disabled');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
