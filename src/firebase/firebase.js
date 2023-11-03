import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDydPCpOVEI1Zh3iQFk3N9eRQaoeDaZJ7U",
    authDomain: "disneyplus-clone-da98e.firebaseapp.com",
    projectId: "disneyplus-clone-da98e",
    storageBucket: "disneyplus-clone-da98e.appspot.com",
    messagingSenderId: "626134166139",
    appId: "1:626134166139:web:6a1904cfbd1c3a05ad10de",
    measurementId: "G-C5DNSJ70X3"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
