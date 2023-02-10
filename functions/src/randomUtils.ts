export const coinFlip = () => Math.floor(Math.random() * 2) == 0;

// can never be "max", will be int < max
export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomArrayElement = (ar: any[]) => {
  const range = ar.length;
  const i = Math.floor(Math.random() * range);
  return ar[i];
};

export const getRandomTime = () => {
  const random = getRandomDate(
    new Date("2022-12-14T01:57:45.271Z"),
    new Date("2022-12-13T01:57:45.271Z")
  );
  return random.toISOString();
};

function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}
