// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf9_SEXxFL2t0dsEhEp3PGrKaqITfO8t8",
  authDomain: "fir-96d21.firebaseapp.com",
  projectId: "fir-96d21",
  storageBucket: "fir-96d21.appspot.com",
  messagingSenderId: "133752878892",
  appId: "1:133752878892:web:f4b71b38959ae360991e89"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;