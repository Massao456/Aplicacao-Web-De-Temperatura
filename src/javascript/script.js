document.querySelector("#search").addEventListener("submit", async (event) => {
  event.preventDefault();

  const cityName = document.querySelector("#city_name").value;

  if (!cityName) {
    return showAlert("Você precisa digitar uma cidade primeiro!");
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=b6a7b8e7d667e7fc16da0f5b7ff190e8&units=metric&lang=pt_br`;


  const results = await fetch(apiUrl);
  const json = await results.json();

  console.log(json);
  console.log(cityName);

  
});

function showAlert(msg) {
  document.querySelector("#alert").innerHTML = msg;
}
