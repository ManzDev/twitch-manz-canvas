export const numberBetween = (min = 0, max = 1) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
