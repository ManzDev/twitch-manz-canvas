import { WIDTH, HEIGHT } from "./constants.js";

export const clearRect = (ctx, x = 0, y = 0, w = WIDTH, h = HEIGHT) => {
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, w, h);
};
