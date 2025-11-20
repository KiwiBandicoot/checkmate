import express from "express";
import cors from "cors";
import { getAucklandWeather } from "./services/weatherService";

const app = express();
app.use(cors());

app.get("/weather", async (req, res) => {
  try {
    const weather = await getAucklandWeather();
    res.json(weather);
    console.log("Sent live weather:", weather);
  } catch (err) {
    console.error("Weather error:", err);
    res.status(500).json({ error: "Could not fetch weather" });
  }
});

app.listen(2138, () =>
  console.log("Backend running on http://localhost:2138")
);
