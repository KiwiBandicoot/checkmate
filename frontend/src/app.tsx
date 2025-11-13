import React, { useEffect, useState } from "react";

interface Weather {
  temperature: number;
  description: string;
  icon: string;
}

const App: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeather({
          temperature: data.temperature,
          description: data.description,
          icon: data.icon,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading Auckland weather...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Auckland Weather</h1>
      <p>
        <strong>{weather?.temperature}°C</strong> – {weather?.description}
      </p>
      {weather?.icon && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
        />
      )}
    </div>
  );
};

export default App;