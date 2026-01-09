export class Clock {
  constructor() {
    this.hoursEl = document.getElementById('hours');
    this.minutesEl = document.getElementById('minutes');
    this.ampmEl = document.getElementById('ampm');
    this.dateEl = document.getElementById('date');
    this.colonEl = document.querySelector('.colon');
    this.timeRowEl = document.querySelector('.time-row');
    this.breathPhase = 0;
    this.breathSpeed = 0.03;
    this.is24Hour = true;
    this.start();
  }

  updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    let ampm = '';

    if (this.is24Hour) {
      hours = String(hours).padStart(2, '0');
      ampm = '';
    } else {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = String(hours).padStart(2, '0');
    }

    this.hoursEl.textContent = hours;
    this.minutesEl.textContent = minutes;
    this.ampmEl.textContent = ampm;

    this.updateDate(now);
  }

  updateDate(now) {
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const weekday = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2, '0');

    this.dateEl.textContent = `${weekday}, ${month} ${day}`;
  }

  toggleFormat() {
    this.is24Hour = !this.is24Hour;
    this.updateTime();
  }

  animateColon() {
    this.breathPhase += this.breathSpeed;
    const opacity = 0.4 + (Math.sin(this.breathPhase) + 1) * 0.3;
    this.colonEl.style.setProperty('--colon-opacity', opacity.toFixed(3));
  }

  start() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    const breathe = () => {
      this.animateColon();
      requestAnimationFrame(breathe);
    };
    breathe();

    this.timeRowEl.addEventListener('click', () => {
      this.toggleFormat();
    });
  }
}
