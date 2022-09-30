import { numberBetween } from "./modules/numberBetween.js";
import { drawImage } from "./modules/drawImage.js";
import { drawRect } from "./modules/drawRect.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR } from "./modules/constants.js";

const canvas = document.querySelector(".base");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const COLORS = ["#f00", "#00f", "#0ff", "#5f0", "#90e", "#f0e"];
const SIZE_SQUARE = 25;
const FPS = 60;
const DATA = [];
const TOTAL_ELEMENTS = 15;
const player = {
  url: "https://manz.dev/assets/stickers/manzdev.png",
  isRight: true,
  x: 300,
  y: 410
};

// Inicializamos el canvas
canvas.width = WIDTH;
canvas.height = HEIGHT;
drawRect(ctx, "black", 0, 0, WIDTH, HEIGHT);

// INIT: Crear y almacenar coordenadas (datos) de los cositos
for (let i = 0; i < TOTAL_ELEMENTS; i++) {
  const x = numberBetween(0, WIDTH - SIZE_SQUARE);
  const y = numberBetween(0, HEIGHT - SIZE_SQUARE);

  const randomIndex = numberBetween(0, COLORS.length - 1);
  const color = COLORS[randomIndex];

  const square = {
    x,
    y,
    color,
    opacity: 15,
    w: SIZE_SQUARE,
    h: SIZE_SQUARE
  };

  DATA.push(square);
}

addEventListener("keydown", (ev) => {
  const isLeft = ev.key === "ArrowLeft";
  const isRight = ev.key === "ArrowRight";

  if (isLeft) {
    player.isRight = false;
    player.x -= 1 * FACTOR;
  }
  if (isRight) {
    player.isRight = true;
    player.x += 1 * FACTOR;
  }
});

const update = () => {
  // for (let i = 0; i < TOTAL_ELEMENTS; i++) {
  // const square = DATA[i];
  // square.x += numberBetween(-1, 1);
  // square.y += numberBetween(-1, 1);
  // }

  console.log("update");
  requestAnimationFrame(update);
  requestAnimationFrame(render);
};

// RENDER: Dibujado en el lienzo
const render = () => {
  clearRect(ctx);

  drawImage(ctx, player);
  // DATA.forEach(square => {
  // drawImage(ctx, square.image, square.x, square.y);
  // drawRect(ctx, square.color + square.opacity.toString(16), square.x, square.y, square.w, square.h);
  // });
};

render();
update();
