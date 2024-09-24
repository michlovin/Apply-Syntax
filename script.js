// Convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit() {
  const celsius = document.getElementById("celsius").value;

  if (celsius === "") {
    document.getElementById("resultCelsius").innerHTML =
      "Please enter a temperature!";
  } else {
    const fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById(
      "resultCelsius"
    ).innerHTML = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  }
}

// Convert Fahrenheit to Celsius
function convertFahrenheitToCelsius() {
  const fahrenheit = document.getElementById("fahrenheit").value;

  if (fahrenheit === "") {
    document.getElementById("resultFahrenheit").innerHTML =
      "Please enter a temperature!";
  } else {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById(
      "resultFahrenheit"
    ).innerHTML = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
  }
}

// Clear the results and inputs
function clearResults() {
  // Clear the input fields
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";

  // Clear the result paragraphs
  document.getElementById("resultCelsius").innerHTML = "";
  document.getElementById("resultFahrenheit").innerHTML = "";
}
