class ParticleSystem {
  constructor(options = {}) {
    this.canvas = options.canvas;
    this.container = options.container;
    this.ctx = this.canvas.getContext("2d");

    // Configuration
    this.quantity = options.quantity || 100;
    this.staticity = options.staticity || 50;
    this.ease = options.ease || 50;
    this.size = options.size || 0.4;
    this.color = options.color || "#ffffff";
    this.vx = options.vx || 0;
    this.vy = options.vy || 0;

    // Internal state
    this.circles = [];
    this.mouse = { x: 0, y: 0 };
    this.canvasSize = { w: 0, h: 0 };
    this.dpr = window.devicePixelRatio || 1;
    this.rafID = null;
    this.resizeTimeout = null;

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initCanvas();
    this.animate();
  }

  setupEventListeners() {
    // Mouse movement
    window.addEventListener("mousemove", (e) => {
      this.onMouseMove(e);
    });

    // Window resize
    window.addEventListener("resize", () => {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(() => {
        this.initCanvas();
      }, 200);
    });
  }

  onMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const { w, h } = this.canvasSize;
    const x = event.clientX - rect.left - w / 2;
    const y = event.clientY - rect.top - h / 2;
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;

    if (inside) {
      this.mouse.x = x;
      this.mouse.y = y;
    }
  }

  initCanvas() {
    this.resizeCanvas();
    this.drawParticles();
  }

  resizeCanvas() {
    this.canvasSize.w = this.container.offsetWidth;
    this.canvasSize.h = this.container.offsetHeight;

    this.canvas.width = this.canvasSize.w * this.dpr;
    this.canvas.height = this.canvasSize.h * this.dpr;
    this.canvas.style.width = `${this.canvasSize.w}px`;
    this.canvas.style.height = `${this.canvasSize.h}px`;
    this.ctx.scale(this.dpr, this.dpr);

    // Clear existing particles and create new ones
    this.circles = [];
    for (let i = 0; i < this.quantity; i++) {
      const circle = this.createCircle();
      this.drawCircle(circle);
    }
  }

  createCircle() {
    const x = Math.floor(Math.random() * this.canvasSize.w);
    const y = Math.floor(Math.random() * this.canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + this.size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;

    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  }

  hexToRgb(hex) {
    hex = hex.replace("#", "");

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    const hexInt = parseInt(hex, 16);
    const red = (hexInt >> 16) & 255;
    const green = (hexInt >> 8) & 255;
    const blue = hexInt & 255;
    return [red, green, blue];
  }

  drawCircle(circle, update = false) {
    const { x, y, translateX, translateY, size, alpha } = circle;
    const rgb = this.hexToRgb(this.color);

    this.ctx.translate(translateX, translateY);
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, 2 * Math.PI);
    this.ctx.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
    this.ctx.fill();
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    if (!update) {
      this.circles.push(circle);
    }
  }

  clearContext() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  }

  drawParticles() {
    this.clearContext();
    for (let i = 0; i < this.quantity; i++) {
      const circle = this.createCircle();
      this.drawCircle(circle);
    }
  }

  remapValue(value, start1, end1, start2, end2) {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  }

  animate() {
    this.clearContext();

    this.circles.forEach((circle, i) => {
      // Handle alpha based on distance from edges
      const edge = [
        circle.x + circle.translateX - circle.size,
        this.canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        this.canvasSize.h - circle.y - circle.translateY - circle.size,
      ];

      const closestEdge = Math.min(...edge);
      const remapClosestEdge = parseFloat(
        this.remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      // Update position
      circle.x += circle.dx + this.vx;
      circle.y += circle.dy + this.vy;

      // Mouse interaction
      circle.translateX +=
        (this.mouse.x / (this.staticity / circle.magnetism) -
          circle.translateX) /
        this.ease;
      circle.translateY +=
        (this.mouse.y / (this.staticity / circle.magnetism) -
          circle.translateY) /
        this.ease;

      this.drawCircle(circle, true);

      // Regenerate particles that go out of bounds
      if (
        circle.x < -circle.size ||
        circle.x > this.canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > this.canvasSize.h + circle.size
      ) {
        this.circles.splice(i, 1);
        const newCircle = this.createCircle();
        this.drawCircle(newCircle);
      }
    });

    this.rafID = requestAnimationFrame(() => this.animate());
  }

  updateConfig(newConfig) {
    Object.assign(this, newConfig);
    this.initCanvas();
  }

  destroy() {
    if (this.rafID) {
      cancelAnimationFrame(this.rafID);
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    window.removeEventListener("resize", this.setupEventListeners);
    window.removeEventListener("mousemove", this.onMouseMove);
  }
}

// Initialize the particle system
const canvas = document.getElementById("particlesCanvas");
const container = document.getElementById("particlesContainer");

const particles = new ParticleSystem({
  canvas: canvas,
  container: container,
  quantity: 200,
  staticity: 50,
  ease: 50,
  size: 1,
  color: "#027fc0",
});

// Control handlers
const quantitySlider = document.getElementById("quantity");
const quantityValue = document.getElementById("quantityValue");
const colorInput = document.getElementById("color");
const sizeSlider = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");
const staticitySlider = document.getElementById("staticity");
const staticityValue = document.getElementById("staticityValue");

quantitySlider.addEventListener("input", (e) => {
  const value = parseInt(e.target.value);
  quantityValue.textContent = value;
  particles.updateConfig({ quantity: value });
});

colorInput.addEventListener("input", (e) => {
  particles.updateConfig({ color: e.target.value });
});

sizeSlider.addEventListener("input", (e) => {
  const value = parseInt(e.target.value) / 10;
  sizeValue.textContent = value.toFixed(1);
  particles.updateConfig({ size: value });
});

staticitySlider.addEventListener("input", (e) => {
  const value = parseInt(e.target.value);
  staticityValue.textContent = value;
  particles.updateConfig({ staticity: value });
});
