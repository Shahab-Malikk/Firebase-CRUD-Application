import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOIkbKehkorpoYPWrbVB-woYaajMMXfBA",
  authDomain: "contactmanager-88aa4.firebaseapp.com",
  projectId: "contactmanager-88aa4",
  storageBucket: "contactmanager-88aa4.appspot.com",
  messagingSenderId: "1065502724657",
  appId: "1:1065502724657:web:131478a7ea1d649bf8fb10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getDatabase(app)