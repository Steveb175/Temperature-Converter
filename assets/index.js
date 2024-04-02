// Conversion of input values
function convertTemp() {
  const startingTemp = parseFloat(
    document.getElementById("startingTemp").value
  );
  const startingUnit = document.getElementById("startingUnit").value;
  const convertedUnit = document.getElementById("convertedUnit").value;

  let convertedTemp;

  if (startingUnit === "fahrenheit") {
    if (convertedUnit === "celsius") {
      convertedTemp = ((startingTemp - 32) * (5 / 9)).toFixed(2);
    } else if (convertedUnit === "kelvin") {
      convertedTemp = ((startingTemp - 32) * (5 / 9) + 273.15).toFixed(2);
    } else {
      convertedTemp = startingTemp.toFixed(2);
    }
  } else if (startingUnit === "celsius") {
    if (convertedUnit === "fahrenheit") {
      convertedTemp = (startingTemp * (9 / 5)).toFixed(2);
    } else if (convertedUnit === "kelvin") {
      convertedTemp = (startingTemp + 273.15).toFixed(2);
    } else {
      convertedTemp = startingTemp.toFixed(2);
    }
  } else if (startingUnit === "kelvin") {
    if (convertedUnit === "fahrenheit") {
      convertedTemp = ((9 / 5) * (startingTemp - 273) + 32).toFixed(2);
    } else if (convertedUnit === "celsius") {
      convertedTemp = (startingTemp - 273.15).toFixed(2);
    } else {
      convertedTemp = startingTemp.toFixed(2);
    }
  }
  document.getElementById("convertedTemp").value = convertedTemp;
}
