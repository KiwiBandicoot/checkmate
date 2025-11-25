import fetch from "node-fetch";
import { mapWeatherCode } from "../utils/weatherCodes";
import { mapWeatherIcon } from "../utils/weatherIcons";

export async function getAucklandWeather() {
  const lat = -36.8485;
  const lon = 174.7633;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const response = await fetch(url);
  const data = await response.json();
  const current = data.current_weather;
  const aucklandTime = new Date(current.time + "Z").toLocaleString("en-NZ", {
    timeZone: "Pacific/Auckland",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
});

  return {
    temperature: current.temperature,
    wind_speed: current.windspeed,
    wind_direction: current.winddirection,
    weather_code: current.weathercode,
    description: mapWeatherCode(current.weathercode),
    icon: mapWeatherIcon(current.weathercode),
    time: aucklandTime,
  };
}
