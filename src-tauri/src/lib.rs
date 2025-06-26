// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn send_http_request(method: &str, url: &str) -> String {
    // This is a placeholder for the actual HTTP request logic.
    // You would typically use an HTTP client library here.
    println!("Sending HTTP request to: {} with method: {}", url, method);
    format!("HTTP request sent to: {} with method: {}", url, method)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, send_http_request])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
