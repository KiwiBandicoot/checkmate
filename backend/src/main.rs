use actix_web::{web, App, HttpServer};
use actix_cors::Cors;
mod pages;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::default()
                    .allow_any_origin()   // allow requests from any origin
                    .allow_any_method()   // allow GET, POST, etc.
                    .allow_any_header()   // allow any headers
            )
            .route("/weather", web::get().to(pages::get_weather))
    })
    .bind("127.0.0.1:2138")?
    .run()
    .await
}