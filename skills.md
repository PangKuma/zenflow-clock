# AI Coding Skills & Project Standards

## Skill: implement-apple-aesthetic
### Description
Applies strict "Apple-style" minimal design principles to UI elements.
### Rules
1.  **Typography**:
    -   Font Stack: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`.
    -   Weight: Use `800` (Heavy) or `900` (Black) for the main time display.
    -   Tracking: Set `letter-spacing: -0.04em` (tight) to mimic Apple's display typography.
    -   Color: Never pure white or black. Use off-white (`#F5F5F7` mix) or deep grays.
2.  **Motion**:
    -   All transitions must use non-linear easing (e.g., cubic-bezier(0.25, 0.1, 0.25, 1.0)).
    -   The colon separator (:) must breathe (opacity 0.4 -> 1.0) using a smooth Sine wave, not a sharp blink.
3.  **Glassmorphism**:
    -   Use `backdrop-filter: blur(120px)` heavily to diffuse background elements into a soft glow.
    -   Avoid distinct borders; use shadows or slight opacity changes for separation.

## Skill: implement-canvas-fluid-bg
### Description
Generates a "Mesh Gradient" / Aurora Borealis effect using HTML5 Canvas 2D API.
### Implementation Logic
1.  **Architecture**:
    -   Create a `FluidBackground` class.
    -   Use `requestAnimationFrame` for the render loop.
2.  **The "Orb" Technique**:
    -   Do NOT use CSS Gradients for motion (performance poor).
    -   Create 5-6 "Orb" objects. Each has: `x, y, radius, color, velocityX, velocityY`.
    -   Orbs float slowly and bounce off screen edges smoothly.
    -   **Critical Step**: Apply a global `filter = 'blur(80px)'` (or higher) to the Canvas context OR use CSS to blur the canvas element significantly to merge the orbs into a fluid light show.
3.  **Themes**:
    -   **Dark Mode**: Deep Black (`#000000`) background. Orbs: Deep Blue (`#1e3a8a`), Violet (`#4c1d95`), Emerald (`#064e3b`). Opacity: 0.4.
    -   **Light Mode**: Soft Gray (`#F5F5F7`) background. Orbs: Pastel Blue (`#bfdbfe`), Lavender (`#e9d5ff`), Soft Pink (`#fecaca`). Opacity: 0.6.

## Skill: scaffold-zenflow-clock
### Description
Builds the specific "ZenFlow" clock project requirements.
### Requirements
1.  **Tech Stack**: Vite + Vanilla JavaScript + CSS (No Frameworks).
2.  **Features**:
    -   **Display**: Fullscreen centered `HH:MM`. No seconds.
    -   **Interaction**:
        -   Click anywhere -> Toggle Dark/Light Theme.
        -   Double Click -> Toggle Fullscreen API.
        -   Mouse Idle (3s) -> Hide cursor (`cursor: none`).
3.  **File Structure**:
    -   `index.html`: Canvas element (bg) + Container (time).
    -   `style.css`: CSS Variables for themes, typography.
    -   `main.js`: Entry point.
    -   `src/Clock.js`: Time logic & DOM updates.
    -   `src/Background.js`: Canvas animation logic.

## Skill: git-commit-semantic
### Description
Generates semantic git commit messages.
### Format
-   `feat:` for new features
-   `fix:` for bug fixes
-   `style:` for visual adjustments
-   `refactor:` for code restructuring