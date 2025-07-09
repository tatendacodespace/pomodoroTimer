// quotes.js - Motivational quote generator
const quotes = [
  "Stay focused and never give up.",
  "Small steps every day.",
  "You are capable of amazing things.",
  "Progress, not perfection.",
  "Keep going, you're doing great!",
  "Discipline is the bridge between goals and accomplishment.",
  "The secret to getting ahead is getting started."
];
const quoteBar = document.getElementById('quote-bar');
function showRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  quoteBar.textContent = quotes[idx];
}
showRandomQuote();
document.getElementById('start-btn').addEventListener('click', showRandomQuote);
