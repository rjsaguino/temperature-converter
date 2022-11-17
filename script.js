const celsius = document.getElementById("celsius");
celsius.addEventListener("input", () => {
  let x = celsius.value * (9 / 5) + 32;
  document.getElementById("fahrenheit").value = Math.round(x * 100) / 100;
});

const fahrenheit = document.getElementById("fahrenheit");
fahrenheit.addEventListener("input", () => {
  let x = (fahrenheit.value - 32) * (5 / 9);
  document.getElementById("celsius").value = Math.round(x * 100) / 100;
});
