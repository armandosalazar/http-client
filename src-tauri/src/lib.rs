// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn send_http_request(method: &str, url: &str) -> Result<String, String> {
    match method {
        "GET" => {
            // Implement GET request logic here
            let res = reqwest::get(url).await.map_err(|e| e.to_string())?;
            print!("Response: {:?}", res);
            Ok(format!("GET request sent to {}", url))
        }
        _ => Err(format!("Unsupported HTTP method: {}", method)),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, send_http_request])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
