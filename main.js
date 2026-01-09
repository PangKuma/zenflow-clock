import { Clock } from './src/Clock.js';
import { FluidBackground } from './src/Background.js';

const clock = new Clock();
const bg = new FluidBackground(document.getElementById('bg-canvas'));

let mouseIdleTimer;
let isFullscreen = false;

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);

  if (newTheme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }

  bg.toggleTheme();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullscreen = true;
  } else {
    document.exitFullscreen();
    isFullscreen = false;
  }
}

function resetMouseIdle() {
  document.body.classList.remove('cursor-hidden');
  clearTimeout(mouseIdleTimer);
  mouseIdleTimer = setTimeout(() => {
    document.body.classList.add('cursor-hidden');
  }, 3000);
}

document.addEventListener('click', (e) => {
  if (e.detail === 1) {
    e.preventDefault();
    toggleTheme();
  }
});

document.addEventListener('dblclick', toggleFullscreen);

document.addEventListener('mousemove', resetMouseIdle);
document.addEventListener('mousedown', resetMouseIdle);
document.addEventListener('keydown', resetMouseIdle);

resetMouseIdle();
