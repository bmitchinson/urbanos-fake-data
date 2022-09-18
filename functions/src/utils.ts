export const mapX = (x: number, callback: Function) =>
  Array(x)
    .fill(1)
    .map(() => callback());
