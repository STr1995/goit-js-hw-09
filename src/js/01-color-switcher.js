let CHANGE_COLOR_INTERVAL = 1000;
let intervalId = null;

const refs = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
};

refs.startButton.addEventListener('click', onClickBtnStart);
refs.stopButton.addEventListener('click', onClickBtnStop);
refs.stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickBtnStart() {
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
    intervalId = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, CHANGE_COLOR_INTERVAL);
};

function onClickBtnStop() {
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
    clearInterval(intervalId);
};