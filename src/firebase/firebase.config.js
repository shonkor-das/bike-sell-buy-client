// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0pu41w7ykW-len_bauDyhLk1xebHEO0s",
  authDomain: "bike-sell-buy-client.firebaseapp.com",
  projectId: "bike-sell-buy-client",
  storageBucket: "bike-sell-buy-client.appspot.com",
  messagingSenderId: "851932719123",
  appId: "1:851932719123:web:3f9702d794fe301a1477e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;