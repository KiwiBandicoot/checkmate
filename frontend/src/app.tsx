import { useEffect, useState } from "react";
import "./styles.css";

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  time: string;
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("/weather");
        // Check if response is ok
        if (!response.ok) {
          throw new Error(`Backend returned status ${response.status}`);
        }

        // Parse JSON safely
        const data = await response.json() as WeatherData;

        // Set weather state
        setWeather(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to fetch weather");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="center">Loading weather...</div>;
  if (error) return <div className="center">Error: {error}</div>;
  if (!weather) return <div className="center">No weather data</div>;

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Auckland Weather</h1>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          className="icon"
        />
        <p className="temperature">{weather.temperature}°C</p>
        <p className="description">{weather.description}</p>
        <p className="time">{weather.time}</p>
      </div>
    </div>
  );
}

export default App;
