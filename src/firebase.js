import { initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth ,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBJ0SrsNr_5nzoPs1wds_6_o8nuaWYbii0",
    authDomain: "react-instagram-clone-9353a.firebaseapp.com",
    projectId: "react-instagram-clone-9353a",
    storageBucket: "react-instagram-clone-9353a.appspot.com",
    messagingSenderId: "939365856927",
    appId: "1:939365856927:web:5d5133545e3e056a0094aa"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore();

  const auth = getAuth();

  const provider = new GoogleAuthProvider();
  
  export default db;
  export {auth,provider};

