// src/utils/weatherIcons.ts

// Maps Open-Meteo weather codes → OpenWeatherMap icon codes
export function mapWeatherIcon(code: number): string {
  const icons: Record<number, string> = {
    0: "01d", // Clear sky
    1: "02d", // Mainly clear
    2: "03d", // Partly cloudy
    3: "04d", // Overcast

    45: "50d", // Fog
    48: "50d", // Depositing rime fog

    51: "09d", // Light drizzle
    53: "09d", // Moderate drizzle
    55: "09d", // Dense drizzle

    56: "09d", // Freezing drizzle
    57: "09d",

    61: "10d", // Slight rain
    63: "10d", // Moderate rain
    65: "10d", // Heavy rain

    66: "13d", // Freezing rain
    67: "13d",

    71: "13d", // Snow
    73: "13d",
    75: "13d",

    77: "13d", // Snow grains

    80: "09d", // Rain showers
    81: "09d",
    82: "09d",

    85: "13d", // Snow showers
    86: "13d",

    95: "11d", // Thunderstorm
    96: "11d",
    99: "11d",
  };

  return icons[code] || "01d"; // default to clear icon
}
