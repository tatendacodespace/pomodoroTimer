// timer.js - Pomodoro timer logic
const timerDisplay = document.getElementById('timer-display');
const timerLabel = document.getElementById('timer-label');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const pomodoroBtn = document.getElementById('pomodoro-btn');
const shortBreakBtn = document.getElementById('short-break-btn');
const longBreakBtn = document.getElementById('long-break-btn');
const sessionCount = document.getElementById('session-count');

let timer;
let timeLeft = 1500; // 25 min
let mode = 'pomodoro';
let isRunning = false;
let pomodorosToday = Number(localStorage.getItem('pomodorosToday')) || 0;
let lastSessionDate = localStorage.getItem('lastSessionDate') || '';

function updateSessionTracker() {
  const today = new Date().toLocaleDateString();
  if (lastSessionDate !== today) {
    pomodorosToday = 0;
    localStorage.setItem('pomodorosToday', pomodorosToday);
    localStorage.setItem('lastSessionDate', today);
    lastSessionDate = today;
  }
  sessionCount.textContent = pomodorosToday;
}

function updateDisplay() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  timerDisplay.textContent = `${min}:${sec}`;
  timerLabel.textContent =
    mode === 'pomodoro' ? 'Focus' : mode === 'short' ? 'Short Break' : 'Long Break';
}

function setMode(newMode) {
  mode = newMode;
  if (mode === 'pomodoro') timeLeft = 1500;
  if (mode === 'short') timeLeft = 300;
  if (mode === 'long') timeLeft = 900;
  updateDisplay();
  document.querySelectorAll('.session-controls button').forEach(btn => btn.classList.remove('active'));
  if (mode === 'pomodoro') pomodoroBtn.classList.add('active');
  if (mode === 'short') shortBreakBtn.classList.add('active');
  if (mode === 'long') longBreakBtn.classList.add('active');
  pauseTimer();
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      if (mode === 'pomodoro') {
        pomodorosToday++;
        localStorage.setItem('pomodorosToday', pomodorosToday);
        updateSessionTracker();
        setMode('short');
      } else if (mode === 'short') {
        setMode('pomodoro');
      } else if (mode === 'long') {
        setMode('pomodoro');
      }
      // Play sound or show notification here if desired
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  if (mode === 'pomodoro') timeLeft = 1500;
  if (mode === 'short') timeLeft = 300;
  if (mode === 'long') timeLeft = 900;
  updateDisplay();
  pauseTimer();
}

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
resetBtn.onclick = resetTimer;
pomodoroBtn.onclick = () => setMode('pomodoro');
shortBreakBtn.onclick = () => setMode('short');
longBreakBtn.onclick = () => setMode('long');

updateSessionTracker();
updateDisplay();
