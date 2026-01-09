export class FluidBackground {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.orbs = [];
    this.isDarkMode = true;
    this.resize();
    this.initOrbs();
    this.animate();

    window.addEventListener('resize', () => {
      this.resize();
      this.reinitOrbs();
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  getThemeColors() {
    return this.isDarkMode
      ? ['#00ffff', '#ff00ff', '#8b5cf6', '#00ff88', '#ff6b9d']
      : ['#bfdbfe', '#e9d5ff', '#fecaca', '#c7d2fe', '#fbcfe8'];
  }

  getOpacity() {
    return 0.8;
  }

  initOrbs() {
    const colors = this.getThemeColors();
    this.orbs = [];
    for (let i = 0; i < 6; i++) {
      this.orbs.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: 150 + Math.random() * 200,
        color: colors[i % colors.length],
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8
      });
    }
  }

  reinitOrbs() {
    this.initOrbs();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const colors = this.getThemeColors();
    this.orbs.forEach((orb, i) => {
      orb.color = colors[i % colors.length];
    });
  }

  update() {
    this.orbs.forEach(orb => {
      orb.x += orb.vx;
      orb.y += orb.vy;

      if (orb.x < -orb.radius) orb.x = this.canvas.width + orb.radius;
      if (orb.x > this.canvas.width + orb.radius) orb.x = -orb.radius;
      if (orb.y < -orb.radius) orb.y = this.canvas.height + orb.radius;
      if (orb.y > this.canvas.height + orb.radius) orb.y = -orb.radius;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const opacity = this.getOpacity();

    this.orbs.forEach(orb => {
      const gradient = this.ctx.createRadialGradient(
        orb.x, orb.y, 0,
        orb.x, orb.y, orb.radius
      );
      gradient.addColorStop(0, orb.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
      gradient.addColorStop(1, orb.color + '00');

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}
