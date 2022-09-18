import { coinFlip, getRandomArrayElement, getRandomInt } from "./randomUtils";

export const columbusLats = [
  40.0005371, 39.9994706, 39.9847362, 40.0525337, 40.0522367, 39.9821248,
  40.0413523, 40.0171148, 40.0532837, 40.0599262, 40.0090225, 40.0155134,
  40.0556795, 40.0525392, 40.0104309, 40.0631595, 40.0525392, 40.0104309,
];

export const columbusLongs = [
  -82.9755235, -82.9762258, -82.9893375, -83.0200747, -83.0201063, -82.9895098,
  -83.018486, -83.0119854, -83.0200556, -82.9737896, -83.009857, -83.0116508,
  -83.0198928, -83.0200697, -83.010224, -83.0195477, -83.0119039, -83.0201744,
];

const getRandomStatus = () => (coinFlip() ? "occupied" : "available");

const getRandomStatusDuration = () => `${getRandomInt(2, 90)} Minutes`;

const getRandomLatLongs = () => ({
  lat: getRandomArrayElement(columbusLats),
  long: getRandomArrayElement(columbusLongs),
});

export const getMeter = (vendor: string) => ({
  ...getRandomLatLongs(),
  vendor,
  status: getRandomStatus(),
  statusDuration: getRandomStatusDuration(),
});
