export const milesToKilometers = (miles) => {
  const value = miles * 1.60934;
  if(isNaN(value))
    throw "Value is not a number";
  return value;
}

export const kilometersToMiles = (kilometers) => {
  const value = kilometers / 1.60934;
  if(isNaN(value))
    throw "Value is not a number";
  return value;
}