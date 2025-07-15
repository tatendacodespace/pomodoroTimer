// theme.js - Theme toggling and background animation
const themeToggle = document.getElementById('theme-toggle');
let darkMode = true;

themeToggle.onclick = () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.remove('light-mode');
    themeToggle.textContent = '🌙';
  } else {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
  }
};
