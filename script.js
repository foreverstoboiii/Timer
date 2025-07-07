let milliseconds = 0;
let timerId = null;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
  return `${minutes}:${seconds}.${centiseconds}`;
}

function updateDisplay() {
  document.getElementById("display").textContent = formatTime(milliseconds);
}

function tick() {
  milliseconds += 10;
  updateDisplay();
}

function start() {
  if (timerId === null) {
    timerId = setInterval(tick, 10);
  }
}

function pause() {
  clearInterval(timerId);
  timerId = null;
}

function reset() {
  pause();
  milliseconds = 0;
  updateDisplay();
}
