import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputData = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const dayClock = document.querySelector('[data-days]');
const hoursClock = document.querySelector('[data-hours]');
const minutesClock = document.querySelector('[data-minutes]');
const secondsClock = document.querySelector('[data-seconds]');
inputData.classList.add('input-field');
btnStart.classList.add('button-start');
let ms = null;
let intervalId = null;

btnStart.addEventListener('click', onStartTimer);
btnStart.setAttribute('disabled', 'disabled');
btnStart.style.backgroundColor = 'gray';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');
      btnStart.style.backgroundColor = 'blue';
      console.log(selectedDates[0]);
    }
  },
};
function onStartTimer() {
  intervalId = setInterval(() => {
    ms = new Date(inputData.value) - Date.now();
    const { days, hours, minutes, seconds } = convertMs(ms);
    dayClock.textContent = addLeadingZero(`${days}`);
    hoursClock.textContent = addLeadingZero(`${hours}`);
    minutesClock.textContent = addLeadingZero(`${minutes}`);
    secondsClock.textContent = addLeadingZero(`${seconds}`);
    console.log(ms);
    if (ms < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
flatpickr(inputData, options);

function addLeadingZero(value) {
  if (value < 10) {
    return `${value}`.padStart(2, '0');
  } else {
    return `${value}`;
  }
}
