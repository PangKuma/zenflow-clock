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

// Click clock-card to toggle 12/24h format (stop propagation to avoid triggering document click)
document.querySelector('.clock-card').addEventListener('click', (e) => {
  e.stopPropagation();
  clock.toggleFormat();
});

// Click outside clock-card to toggle theme
document.addEventListener('click', (e) => {
  if (!e.target.closest('.clock-card')) {
    toggleTheme();
  }
});

// Double click anywhere to toggle fullscreen
document.addEventListener('dblclick', (e) => {
  e.preventDefault();
  toggleFullscreen();
});

document.addEventListener('mousemove', resetMouseIdle);
document.addEventListener('mousedown', resetMouseIdle);
document.addEventListener('keydown', resetMouseIdle);

resetMouseIdle();
