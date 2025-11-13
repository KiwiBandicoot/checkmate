use actix_web::{HttpResponse, Responder};
use serde_json::Value;
use serde::Serialize;
use reqwest;
use std::env;

#[derive(Serialize)]
pub struct Weather {
    pub temperature: f32,
    pub description: String,
    pub icon: String,
}

pub async fn get_weather() -> impl Responder {
    // Load .env file
    dotenv::from_path("../backend/.env").ok();
    let api_key = env::var("OPENWEATHER_API_KEY")
        .expect("Missing OPENWEATHER_API_KEY in .env");

    // OpenWeatherMap endpoint for Auckland, metric units
    let url = format!(
        "https://api.openweathermap.org/data/2.5/weather?q=Auckland,nz&appid={}&units=metric",
        api_key
    );

    // Make request
    match reqwest::get(&url).await {
        Ok(response) => {
            match response.json::<serde_json::Value>().await {
                Ok(json) => {
                    // Map API response to our Weather struct
                    let weather = Weather {
                        temperature: json["main"]["temp"].as_f64().unwrap_or(0.0) as f32,
                        description: json["weather"][0]["description"]
                            .as_str()
                            .unwrap_or("Unknown")
                            .to_string(),
                        icon: json["weather"][0]["icon"]
                            .as_str()
                            .unwrap_or("01d")
                            .to_string(),
                    };
                    HttpResponse::Ok().json(weather)
                }
                Err(_) => HttpResponse::InternalServerError().body("Failed to parse weather JSON"),
            }
        }
        Err(_) => HttpResponse::InternalServerError().body("Failed to fetch weather"),
    }
}