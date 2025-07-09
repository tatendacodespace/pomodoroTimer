// theme.js - Theme toggling and background animation
const themeToggle = document.getElementById('theme-toggle');
let darkMode = true;

themeToggle.onclick = () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.background = '#232946';
    document.body.style.color = '#eebbc3';
    themeToggle.textContent = '🌙';
  } else {
    document.body.style.background = '#f6f6f6';
    document.body.style.color = '#232946';
    themeToggle.textContent = '☀️';
  }
};
