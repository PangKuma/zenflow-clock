# ZenFlow Clock

A minimalist fullscreen clock with thick glass material UI and fluid background animations.

<div align="center">
  <img src="https://img.shields.io/badge/Vite-6.0.1-646CFF?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Canvas_2D-API-FF69B4?logo=html5" alt="Canvas">
  <img src="https://img.shields.io/badge/version-1.0.0-brightgreen" alt="v1.0.0">
</div>

## Features

- **Thick Glass UI**: Physical glass material with layered box-shadows, `backdrop-filter: blur(50px) saturate(180%)`
- **Fluid Background**: Canvas-based animated orbs with neon colors (Cyan, Magenta, Violet, Green, Pink)
- **Breathing Colon**: Sine-wave opacity animation (0.4 → 1.0) on the time separator
- **Theme System**: Data-driven light/dark mode switching
- **Interactions**:
  - Single click → Toggle theme
  - Double click → Toggle fullscreen
  - Mouse idle 3s → Auto-hide cursor
- **Typography**: System UI font stack, weight 800, tracking -0.04em, 20vw size
- **Translation Safe**: `translate="no"` prevents browser auto-translate from breaking layout

## Tech Stack

- **Build**: Vite 6.0.1
- **Runtime**: Vanilla JavaScript (ES6+ modules)
- **Styling**: Pure CSS (no frameworks)
- **Rendering**: HTML5 Canvas 2D API

## Project Structure

```
zenflow-clock/
├── index.html          # Canvas + Glass Card structure
├── style.css           # Thick glass material styles
├── main.js             # Theme toggle, fullscreen, mouse idle
├── src/
│   ├── Clock.js        # Time logic + breathing colon
│   └── Background.js   # Canvas fluid animation
├── skills.md           # AI coding skills definitions
└── package.json        # Dependencies & scripts
```

## Getting Started

### Installation

```bash
# Clone repository
git clone https://github.com/PangKuma/zenflow-clock.git
cd zenflow-clock

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Visual Design

### The "Thick Glass" Technique

The glass card uses layered CSS effects to simulate physical material:

```css
backdrop-filter: blur(50px) saturate(180%);
background: rgba(255, 255, 255, 0.01);
box-shadow:
  inset 0 0 0 1px rgba(255, 255, 255, 0.1),  /* Inner edge */
  inset 0 1px 0 0 rgba(255, 255, 255, 0.3),  /* Top highlight */
  0 20px 50px rgba(0, 0, 0, 0.1);            /* Outer shadow */
```

- **`saturate(180%)`**: Boosts background orb colors as they pass through glass
- **Layered shadows**: Create physical thickness illusion
- **Near-transparent fill**: Allows fluid background to dominate

### Prismatic Border Effect

When neon orbs pass behind the semi-transparent glass border, the `saturate(180%)` filter makes the glass appear to "glow" with that color naturally.

## Dark Mode Colors

- **Orbs**: `#00ffff` (Cyan), `#ff00ff` (Magenta), `#8b5cf6` (Violet), `#00ff88` (Green), `#ff6b9d` (Pink)
- **Opacity**: 0.8 (high vibrancy)
- **Canvas blur**: 150px (fluid blending)

## Performance

- Canvas render loop via `requestAnimationFrame`
- Single DOM manipulation per second (time update)
- CSS transitions for theme switching (0.6s cubic-bezier easing)
- Optimized reflow/repaint with CSS transforms
- CSS custom properties for animation (avoids layout thrashing)

## Browser Compatibility

- **Tested**: Chrome, Edge, Safari, Firefox (latest versions)
- **Desktop**: macOS, Windows 10/11
- **Mobile**: iOS Safari, Chrome Mobile
- **Known Issue**: Browser auto-translate can convert colon (`:`) to full-width (`：`)
  - **Solution**: Added `translate="no"` attribute to clock container

## Debug History

### v1.0.0 Release Fixes
1. **Windows Layout Gap** (commit `03bc229`)
   - Problem: Excessive spacing between time digits on Windows
   - Fix: Added `gap: 1vw` to `.time-group`, removed colon margins

2. **Colon Jumping Bug** (commit `57f9d10`)
   - Problem: Colon position snapped during breathing animation on Windows
   - Root cause: Inline `style.opacity` triggered layout reflow
   - Fix: Use CSS custom property `--colon-opacity` with `will-change`

3. **Google Translate Conflict** (commit `e5ee9f5`)
   - Problem: Browser auto-translation converted `:` to `：`, breaking layout
   - Fix: Added `translate="no"` and `notranslate` class to clock container

## License

MIT

---

Built with Vite + Vanilla JavaScript. No frameworks, pure performance.

