const weatherEl = document.getElementById("weather");

const onGeoOk = async (position) => {
  const { latitude, longitude } = position.coords;
  const weather = await getCurrentWeather(latitude, longitude);
  weatherEl.innerText = `${weather.sys.country}, ${weather.name}. ${weather.main.temp}°C, ${weather.weather[0].description}.`;
};

const getCurrentWeather = async (lat, lng) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5c9d41180a730027752e8c20035254b5&units=metric`
  );
  return await res.json();
};

const onGeoError = () => {
  alert("Can't find you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
