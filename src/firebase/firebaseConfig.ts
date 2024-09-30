import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDkxxnP8Km3QoPcZIGh0fSg-n_zF12pJQY",
  authDomain: "librarymanagementevaluation.firebaseapp.com",
  databaseURL: "https://librarymanagementevaluation-default-rtdb.firebaseio.com",
  projectId: "librarymanagementevaluation",
  storageBucket: "librarymanagementevaluation.appspot.com",
  messagingSenderId: "383549729662",
  appId: "1:383549729662:web:a683a957405569e45de12f",
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database };
