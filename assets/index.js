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
  //Call freezing function
  freezing(convertedUnit, convertedTemp);
  normal(convertedUnit, convertedTemp);
  hot(convertedUnit, convertedTemp);
}

function freezing(convertedUnit, convertedTemp) {
  var mainContainer = document.querySelector(".main-container");
  var btn = document.querySelector(".btn");

    if ((convertedUnit === "fahrenheit" && convertedTemp <= 32) ||
     (convertedUnit === "celsius" && convertedTemp <= 0) ||
     (convertedUnit === "kelvin" && convertedTemp <= 273.15)) {
     document.body.style.backgroundColor = "#6494b4";
     mainContainer.style.backgroundColor = "#afd1f2";
     btn.style.backgroundColor = "#92b4cc"
    }
}

function normal(convertedUnit, convertedTemp) {
  var mainContainer = document.querySelector(".main-container");
  var btn = document.querySelector(".btn");

  if ((convertedUnit === "fahrenheit" && convertedTemp > 32 && convertedTemp < 80) ||
   (convertedUnit === "celsius" && convertedTemp > 0 && convertedTemp < 26.67) ||
   (convertedUnit === "kelvin" && convertedTemp > 273.15  && convertedTemp < 299.82)) {
   document.body.style.backgroundColor = "#f0f0f0";
   mainContainer.style.backgroundColor = "#fff";
   btn.style.backgroundColor = "#4CAF50"
  }


}

function hot(convertedUnit, convertedTemp) {
  var mainContainer = document.querySelector(".main-container");
  var btn = document.querySelector(".btn");

  if ((convertedUnit === "fahrenheit" && convertedTemp >= 80) ||
   (convertedUnit === "celsius" && convertedTemp >= 26.67) ||
   (convertedUnit === "kelvin" && convertedTemp >= 299.82)) {
   document.body.style.backgroundColor = "#900c3f";
   mainContainer.style.backgroundColor = "#c70039";
   btn.style.backgroundColor = "#f94c10"
  }
}