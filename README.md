# 🗣️ Voice Assistant for Senior Citizens

A web-based voice assistant application designed to help senior citizens with day-to-day tasks through a simple, friendly, and accessible interface.

![Senior Citizens](senior-citizens.jpg)

---

## 🌟 Features

- 🎙️ **Voice Command Support** – Enables hands-free interaction using speech.
- ✅ **User Authentication** – Sign-up and login support using Firebase.
- 💡 **Simple Interface** – Easy-to-use design with large fonts and intuitive layout.
- 📋 **Task Assistance** – Handles everyday requests like reminders or alerts.
- 🌐 **Responsive UI** – Mobile-friendly and accessible design.

---

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| HTML/CSS/JS    | Front-end structure & styling    |
| Firebase       | Authentication and database      |
| Web Speech API | Voice recognition and TTS        |

---

## 📁 Folder & File Overview

| File/Folder        | Purpose                                |
|--------------------|----------------------------------------|
| `index.html`       | Main landing page                      |
| `assistant.html`   | Core voice assistant interface         |
| `login.html`       | Login screen                           |
| `signup.html`      | Sign-up screen                         |
| `assistant.css`    | Styling for assistant UI               |
| `login.css`        | Styling for login page                 |
| `signup.css`       | Styling for sign-up page               |
| `firebase.js`      | Firebase config and auth logic         |
| `scripts.js`       | General scripting for interactivity    |
| `login.js`         | Login functionality with Firebase      |
| `signup.js`        | Sign-up functionality with Firebase    |
| `bgimage.png`      | Background image                       |
| `logo1.png`        | Application logo                       |
| `senior-citizens.jpg` | Banner or promotional image         |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sumit07-git/voice-assistant-for-senior-citizens.git
cd voice-assistant-for-senior-citizens
2. Firebase Setup
Create a Firebase project at Firebase Console.

Enable Authentication (Email/Password).

Replace the config block inside firebase.js with your own Firebase credentials.

js
Copy
Edit
// firebase.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  ...
};
3. Run the App
You can open index.html directly in the browser or host it using any static server:

bash
Copy
Edit
npx serve .
🧠 Sample Voice Commands
"What’s the weather like today?"

"Remind me to take my medicine at 8 PM"

"What’s the latest news?"
