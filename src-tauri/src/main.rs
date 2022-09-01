#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use game::Universe;

mod game;

#[tauri::command]
fn new_universe(width: u32, height: u32, prop: f64) -> Universe {
    Universe::new(width, height, prop)
}

#[tauri::command]
fn next_gen(mut universe: Universe) -> Universe {
    universe.tick();
    universe
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![new_universe, next_gen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
