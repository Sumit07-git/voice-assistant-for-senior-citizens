const firebaseConfig = {
  apiKey: "AIzaSyA7N3gbwM2b249hIYlcwzzzsQmmen55A4U",
  authDomain: "voice-assistant-9f259.firebaseapp.com",
  projectId: "voice-assistant-9f259",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();