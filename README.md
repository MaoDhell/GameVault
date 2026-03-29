# GameVault - Video Game Store App
---
##### Student Information
**Full Name**: Laura D. Escobar Ruiz - Laura V. Uribe Franco  
**Course**: Desarrollo Móvil  
**Project Name**: GameVault  

---

## Project Description

GameVault is a mobile catalog application for a video game store developed with React Native CLI. It allows users to explore a collection of games, view technical details, add new titles through a validated form, and stay updated with a self-rotating gaming news section. This project demonstrates the integration of **Stack and Tab Navigation**, as well as the advanced use of **Hooks** (`useState`, `useEffect`) and parameter passing between screens.

--- 

## Features

- **Game Catalog:** Browse available games with platform and genre details.
- **Detailed View:** Full technical specifications for each title including price and age rating.
- **Add Game Form:** Controlled form with real-time validation and `KeyboardAvoidingView`.
- **Gaming News:** Auto-rotating news feed with a 5-second interval and memory leak cleanup.

---

## Technologies Used

- **Framework:** React Native (CLI)
- **Navigation:** React Navigation (Stack & Tabs)
- **Language:** JavaScript / React Hooks
- **Styling:** StyleSheet (External files)

---

## Installation and Execution Guide

Follow these steps to run the application locally:

1. **Clone the repository:**
    Bash
    ```
    git clone https://github.com/MaoDhell/GameVault
    cd GameVault
    ```

2. **Install dependencies:**
    Bash
    ```
    npm install
    # or
    yarn install
    ```

3. **iOS Setup (if applicable):**
    Bash
    ```
    cd ios && pod install && cd ..
    ```

4. **Run the application:**
	- **Android:** `npx react-native run-android`
	- **iOS:** `npx react-native run-ios`

---

## Technical Considerations

- **Code Language:** All source code, including variables, functions, and comments, is written in English.
- **Persistence:** Data is handled locally via state; no permanent database.
- **UI:** The user interface is displayed in Spanish for better accessibility.



