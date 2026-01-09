export class Clock {
  constructor() {
    this.hoursEl = document.getElementById('hours');
    this.minutesEl = document.getElementById('minutes');
    this.colonEl = document.querySelector('.colon');
    this.breathPhase = 0;
    this.breathSpeed = 0.03;
    this.start();
  }

  updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    this.hoursEl.textContent = hours;
    this.minutesEl.textContent = minutes;
  }

  animateColon() {
    this.breathPhase += this.breathSpeed;
    const opacity = 0.4 + (Math.sin(this.breathPhase) + 1) * 0.3;
    this.colonEl.style.opacity = opacity.toFixed(3);
  }

  start() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    const breathe = () => {
      this.animateColon();
      requestAnimationFrame(breathe);
    };
    breathe();
  }
}
