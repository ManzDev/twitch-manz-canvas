import { FACTOR } from "./constants.js";

export const drawImage = (ctx, element) => {
  const { x, y, url, isRight } = element;

  const image = new Image();
  image.src = url;
  const w = image.width;
  const h = image.height;

  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(image, x, y, w * FACTOR, h * FACTOR);
};
