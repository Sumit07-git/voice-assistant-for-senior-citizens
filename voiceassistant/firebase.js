import { initializeApp } from "firebase/app";
import { getAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyA7N3gbwM2b249hIYlcwzzzsQmmen55A4U",
  authDomain: "voice-assistant-9f259.firebaseapp.com",
  projectId: "voice-assistant-9f259",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const app = initializeApp(firebaseConfig);
const appCheck = getAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Lcq-3wrAAAAANZIK2_JsMyOcQABaClQW5_e4uKH"),
  isTokenAutoRefreshEnabled: true,
});