"use client";

import { useEffect, useRef } from "react";

const DIGITS = "0123456789";
const FONT_SIZE = 17;
const SPACING = 40;
const DROP_ALPHA = 0.85;
const MIN_START_DELAY = 0;
const MAX_START_DELAY = 8000;
const MIN_RESET_DELAY = 500;
const MAX_RESET_DELAY = 12000;
const MIN_SPEED = 0.15;
const MAX_SPEED = 0.32;

type DropState = {
  char: string;
  y: number;
  speed: number;
  startAt: number;
};

function randomDigit() {
  return DIGITS[Math.floor(Math.random() * DIGITS.length)];
}

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let columns = 0;
    let drops: DropState[] = [];
    let width = 0;
    let height = 0;
    let lastFrameTime = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const scale = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);

      columns = Math.max(1, Math.floor(width / SPACING));
      drops = Array.from({ length: columns }, () => ({
        char: randomDigit(),
        y: Math.random() * height,
        speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
        startAt: performance.now() + Math.random() * (MAX_START_DELAY - MIN_START_DELAY),
      }));
    };

    const drawFrame = (timestamp: number) => {
      const delta = lastFrameTime ? Math.min(48, timestamp - lastFrameTime) : 16;
      lastFrameTime = timestamp;

      context.fillStyle = "rgba(2, 6, 12, 1)";
      context.fillRect(0, 0, width, height);

      context.font = `600 ${FONT_SIZE}px "Geist Variable", monospace`;
      context.textBaseline = "top";

      for (let column = 0; column < columns; column += 1) {
        const drop = drops[column];
        if (timestamp < drop.startAt) {
          continue;
        }

        if (drop.y < 0) {
          drop.y = Math.random() * 80;
        }

        const x = column * SPACING;
        const y = drop.y;

        const fade = Math.min(1, y / height);
        context.fillStyle = `rgba(110, 255, 157, ${DROP_ALPHA * (0.55 + fade * 0.45)})`;
        context.fillText(drop.char, x, y);

        if (y > height + 240) {
          drop.startAt = timestamp + MIN_RESET_DELAY + Math.random() * (MAX_RESET_DELAY - MIN_RESET_DELAY);
          drop.speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
          drop.char = randomDigit();
          drop.y = -Math.random() * 180;
        } else {
          drop.y = y + drop.speed * delta;
        }
      }

      animationFrame = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    if (!reducedMotion.matches) {
      animationFrame = window.requestAnimationFrame(drawFrame);
    } else {
      context.fillStyle = "rgba(2, 6, 12, 1)";
      context.fillRect(0, 0, width, height);
    }

    const handleMotionChange = () => {
      window.cancelAnimationFrame(animationFrame);
      lastFrameTime = 0;
      context.fillStyle = "rgba(2, 6, 12, 1)";
      context.fillRect(0, 0, width, height);

      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(drawFrame);
      }
    };

    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrixRain" aria-hidden="true" />;
}
