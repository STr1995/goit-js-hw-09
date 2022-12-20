import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "notiflix/dist/notiflix-3.2.5.min.css";
import {Notify} from 'notiflix/build/notiflix-notify-aio';

const SECONDS_INTERVAL = 1000;
let btnStartDisabled = null;
let intervalId = null;
let currentTime = null;

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    timer: {
        container: document.querySelector('.timer'),
        days: document.querySelector('[data-days]'),
        hours: document.querySelector('[data-hours]'),
        minutes: document.querySelector('[data-minutes]'),
        seconds: document.querySelector('[data-seconds]'),
    },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.input, options);


