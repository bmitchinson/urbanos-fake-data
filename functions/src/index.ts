import * as functions from "firebase-functions";
import { getMeter } from "./fakeMeterData";
import { getCrash } from "./fakeCrashData";
import { mapX } from "./utils";
import { getLocationData } from "./fakeLocationData";

const processMeterReq = (req: functions.https.Request, meterName: string) => {
  const defaultAmount = 20;
  const reqQ = req.headers?.quantity as string;
  const amountOfMeters = reqQ === "0" ? 0 : parseInt(reqQ) || defaultAmount;
  return mapX(amountOfMeters, () => getMeter(meterName));
};

const processCrashReq = (req: functions.https.Request) => {
  const defaultAmount = 100;
  const reqQ = req.headers?.quantity as string;
  const amountOfCrashes = reqQ === "0" ? 0 : parseInt(reqQ) || defaultAmount;
  return mapX(amountOfCrashes, getCrash);
};

const validSecretProvided = (
  req: functions.https.Request,
  requiredHeaderAttr: string,
  secret: string
) => {
  const providedSecret = req.headers[requiredHeaderAttr] as string;
  return providedSecret === secret;
};

export const benParkingMeters = functions.https.onRequest((req, res) => {
  res.send(processMeterReq(req, "Ben Meters Inc"));
});

export const jenzoParkingMeters = functions.https.onRequest((req, res) => {
  res.send(processMeterReq(req, "Jenzo Parking LLC"));
});

export const secretParkingMeters = functions.https.onRequest((req, res) => {
  try {
    if (validSecretProvided(req, "secret-passcode", "ben-is-cool-123")) {
      res.send(processMeterReq(req, "Secret Celebrity Parking"));
    } else {
      const headers = JSON.stringify(req.headers);
      res.status(401).send(`Bad request, headers were: ${headers}`);
    }
  } catch (e) {
    res.status(400).send(`Error logged in cloud functions`);
  }
});

export const crashes = functions.https.onRequest((req, res) => {
  res.send(processCrashReq(req));
});

export const crashLocations = functions.https.onRequest((req, res) => {
  res.send(getLocationData());
});
