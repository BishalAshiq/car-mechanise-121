import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthetication = () =>{ 
    initializeApp(firebaseConfig); 
}

export default initializeAuthetication;