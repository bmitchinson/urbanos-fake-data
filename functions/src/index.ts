import * as functions from "firebase-functions";

const coinFlip = () => Math.floor(Math.random() * 2) == 0;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomStatus = () => (coinFlip() ? "occupied" : "available");

const getRandomStatusDuration = () => `${getRandomInt(2, 90)} Minutes`;

const benMeterName = "Ben Meters Inc";
const jenzoMeterName = "Jenzo Parking LLC";

const benMeters = () => [
  {
    lat: "40.0613491",
    long: "-82.9887223",
    vendor: benMeterName,
    status: getRandomStatus(),
    statusDuration: getRandomStatusDuration(),
  },
  {
    lat: "40.0097696",
    long: "-83.010025",
    vendor: benMeterName,
    status: getRandomStatus(),
    statusDuration: getRandomStatusDuration(),
  },
  {
    lat: "39.9932218",
    long: "-82.9822289",
    vendor: benMeterName,
    status: getRandomStatus(),
    statusDuration: getRandomStatusDuration(),
  },
];

const jenzoMeters = () => [
  {
    lat: "40.0081025",
    long: "-83.0096147",
    vendor: jenzoMeterName,
    status: getRandomStatus(),
    statusDuration: getRandomStatusDuration(),
  },
  {
    lat: "40.0244744",
    long: "-83.0139808",
    vendor: jenzoMeterName,
    status: getRandomStatus(),
    statusDuration: getRandomStatusDuration(),
  },
  {
    lat: "40.0599287",
    long: "-82.9737811",
    vendor: jenzoMeterName,
    status: getRandomStatus(),
    statusDuration: getRandomStatusDuration(),
  },
];

export const benParkingMeters = functions.https.onRequest((req, res) => {
  res.send(benMeters());
});

export const jenzoParkingMeters = functions.https.onRequest((req, res) => {
  res.send(jenzoMeters());
});
