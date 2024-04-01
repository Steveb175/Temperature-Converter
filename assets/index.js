// Conversion of input values
function convertTemp() {
    const startingTemp = document.getElementById(startingTemp);
    const startingUnit = document.getElementById(startingUnit);
    const convertedUnit = document.getElementById(convertedUnit);

    let convertedTemp;

    if (startingUnit === "fahrenheit") {
        if (convertedUnit === "celsius") {
            convertedTemp = (startingTemp - 32) * 5/9;
        } else if (convertedUnit === "kelvin") {
                convertedTemp = (startingTemp - 32) * (5/9) + 273.15;
            } else {
                startingTemp = convertedTemp;
            }
    } else if (startingUnit === "celsius") {
        if (convertedUnit === "fahrenheit") {
            convertedTemp = (startingTemp*(9/5));
        } else if (convertedUnit === "kelvin") {
            convertedTemp = (startingTemp + 273.15);
        } else {
            startingTemp = convertedTemp;
        }
    } else if (startingUnit === "kelvin") {
        if (convertedUnit === "fahrenheit") {
            convertedTemp = (9/5)*(startingTemp - 273) + 32;
        } else if (convertedUnit === "celsius") {
            convertedTemp = (startingTemp - 273.15);
        } else {
            startingTemp = convertedTemp;
        }
    }
    document.getElementById("convertedTemp").value = convertTemp.toFixed(2);
}