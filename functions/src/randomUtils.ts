export const coinFlip = () => Math.floor(Math.random() * 2) == 0;

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomArrayElement = (ar: any[]) => {
  const range = ar.length;
  const i = Math.floor(Math.random() * range);
  return ar[i];
};
