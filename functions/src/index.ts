import * as functions from "firebase-functions";
import { getMeter } from "./fakeMeterData";
import { mapX } from "./utils";

const processMeterReq = (req: functions.https.Request, meterName: string) => {
  const defaultAmount = 20;
  const reqQ = req.headers?.quantity as string;
  const amountOfMeters = reqQ === "0" ? 0 : parseInt(reqQ) || defaultAmount;
  return mapX(amountOfMeters, () => getMeter(meterName));
};

export const benParkingMeters = functions.https.onRequest((req, res) => {
  res.send(processMeterReq(req, "Ben Meters Inc"));
});

export const jenzoParkingMeters = functions.https.onRequest((req, res) => {
  res.send(processMeterReq(req, "Jenzo Parking LLC"));
});
