import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/weather", (req, res) => {
  // Hardcoded weather data for Auckland
  const weather = {
    temperature: 18.5,
    description: "light rain",
    icon: "10d",
  };

  res.json(weather);
  console.log("Sent hardcoded weather data");
});

app.listen(2138, () => console.log("Backend running on http://localhost:2138"));
