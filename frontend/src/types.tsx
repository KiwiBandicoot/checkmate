export interface Weather {
  temperature: number;  // Celsius
  description: string;  // e.g., "Clear sky"
  icon: string;         // OpenWeatherMap icon code
  time: string;         // e.g., "2024-06-01 14:00"
}