// music.js - Lo-fi music player logic
const audio = document.getElementById('lofi-audio');
const playBtn = document.getElementById('music-play');
const pauseBtn = document.getElementById('music-pause');
const volumeSlider = document.getElementById('music-volume');
const nowPlaying = document.getElementById('track-title');
const youtubeToggleBtn = document.getElementById('music-youtube-toggle');
const youtubeContainer = document.getElementById('youtube-player-container');
const youtubePlayer = document.getElementById('youtube-player');

let youtubeVisible = false;

playBtn.onclick = () => {
  audio.play();
  nowPlaying.textContent = 'Lo-Fi Chill Beats';
};
pauseBtn.onclick = () => audio.pause();
volumeSlider.oninput = e => {
  audio.volume = e.target.value;
};
audio.volume = 0.5;

youtubeToggleBtn.onclick = () => {
  youtubeVisible = !youtubeVisible;
  youtubeContainer.style.display = youtubeVisible ? 'block' : 'none';
  // Mute/unmute YouTube player via postMessage API
  if (youtubeVisible) {
    youtubePlayer.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
  } else {
    youtubePlayer.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
  }
};
