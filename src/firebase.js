import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDB_uhYcclyLK6s9nlYOOMBYAXYYB3efX0",

    authDomain: "portfolio-guestbook-6d34c.firebaseapp.com",

    projectId: "portfolio-guestbook-6d34c",

    storageBucket: "portfolio-guestbook-6d34c.firebasestorage.app",

    messagingSenderId: "740923492895",

    appId: "1:740923492895:web:6ff7e3b477e323b022632a"


};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
