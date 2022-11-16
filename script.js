const convert = () => {
  let celsius = document.getElementById("celsius");
  let fahrenheit = celsius.value * (9 / 5) + 32;
  let resultBox = document.querySelector("#result");
  resultBox.innerHTML =
    celsius.value + " °C = " + fahrenheit.toFixed(2) + " °F";
  celsius.value = null;
};
