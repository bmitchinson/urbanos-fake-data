import { columbusLats, columbusLongs } from "./fakeMeterData";
import { coinFlip, getRandomInt, getRandomTime } from "./randomUtils";

const getRandomLatLongPair = () => {
  const index = getRandomInt(0, columbusLats.length);
  return {
    lat: columbusLats[index],
    long: columbusLongs[index],
  };
};

export const getCrash = () => ({
  ...getRandomLatLongPair(),
  crash_time: getRandomTime(),
  severity: coinFlip() ? "high" : "low",
});
