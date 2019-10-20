// TEHTÄVÄ 1: MUUTA TOTEUTUSTA NIIN, ETTÄ FUNKTIO PALAUTTAA "NULL", MIKÄLI JSON ON VIRHEELLINEN
export const convertJSON = (jsonString) => {
  return JSON.parse(jsonString);
}