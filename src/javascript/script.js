document.querySelector("#search").addEventListener("submit", async (event) => {
  event.preventDefault();

  const cityName = document.querySelector("#city_name").value;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=b6a7b8e7d667e7fc16da0f5b7ff190e8&units=metric&lang=pt_br`;


  const results = await fetch(apiUrl);
  const json = await results.json();
   
  if (Number(json.cod) === 200) {
      showinfo ({
     city: json.name,
     country: json.sys.country,
     temp: json.main.temp,
     tempMax: json.main.temp_max,
     tempMin: json.main.temp_min,
     description: json.weather[0].description,
     tempIcon: json.weather[0].icon,
   });
  } 
});

function showinfo(json) {
    showAlert('')

    document.querySelector('#weather').classList.add('show')

    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`

    document.querySelector('#temp_value').innerHTML = `${json.temp.toFixed(0)} <sup>°C</sup>`

    document.querySelector('#temp_description').innerHTML = `${json.description}`

    document.querySelector('#temp_max').innerHTML = `${json.tempMax.toFixed(0)} <sup>°C</sup>`

    document.querySelector('#temp_min').innerHTML = `${json.tempMin.toFixed(0)} <sup>°C</sup>`

    document.querySelector('#temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
}

function showAlert(msg) {
  document.querySelector("#alert").innerHTML = msg;
}
