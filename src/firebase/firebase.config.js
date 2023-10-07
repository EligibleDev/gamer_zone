import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC330tiQVI1M-bdNU_DiNwx63HJmqhloL8",
  authDomain: "assignment-9-2c5e4.firebaseapp.com",
  projectId: "assignment-9-2c5e4",
  storageBucket: "assignment-9-2c5e4.appspot.com",
  messagingSenderId: "832976980717",
  appId: "1:832976980717:web:a87f0bd68a832ab5f51ae4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);