
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBvApP_eN0dDmoISgTmpiFFcj4aUPalg7o",
    authDomain: "porfolio-518b1.firebaseapp.com",
    projectId: "porfolio-518b1",
    storageBucket: "porfolio-518b1.appspot.com",
    messagingSenderId: "927280631259",
    appId: "1:927280631259:web:290d234730e62a18292bfe",
    measurementId: "G-SYNBPECLDG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);


const storage = getStorage(app, firebaseConfig.storageBucket);
const storageRef = (theStoreage, url) => {
    console.log(storage);
    console.log(url);
    return ref(theStoreage, url)
};

export { db, app, storage, storageRef, uploadBytesResumable, getDownloadURL };