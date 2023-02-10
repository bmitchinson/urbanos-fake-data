import { columbusLats } from "./fakeMeterData";

const streetNames = [
  "Helen's Terrace",
  "Fort Heights",
  "Riverside Loke",
  "Westbourne Leaze",
  "Lambridge Building Mews",
  "Camden Garth",
  "Hawthorne Bottom",
  "Sycamore Pleasant",
  "Mayflower Retreat",
  "Ingloss Lane",
  "Mill Hill Willows",
  "Trafalgar Leaze",
  "Chestnuts",
  "Cromwell Firs",
  "Red Lion Corner",
  "Alexandra Boulevard",
  "Brunswick Loan",
  "Westbury Spinney",
];

const townNames = [
  "Hatherleigh",
  "Ottery St Mary",
  "Levittown",
  "Panama City",
  "Hedon",
  "Beccles",
  "Sydney",
  "Merced",
  "Princeton",
  "Daventry",
  "Bryan",
  "Birmingham",
  "Naracoorte",
  "Cranford",
  "Ocala",
  "Manti",
  "Gainesville",
  "Coral Gables",
];

const getStreetOfLat = (lat: number) => {
  const index = columbusLats.indexOf(lat);
  return streetNames[index];
};

const getTownOfLat = (lat: number) => {
  const index = columbusLats.indexOf(lat);
  return townNames[index];
};

export const getLocationData = () => {
  return columbusLats.map((lat) => {
    return {
      lat: lat,
      street_name: getStreetOfLat(lat),
      town_name: getTownOfLat(lat),
    };
  });
};
