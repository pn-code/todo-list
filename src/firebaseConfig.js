import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQcaQGGwQWJf4RAipQIo-0WMvLqi5PMWo",
    authDomain: "to-do-list-e2375.firebaseapp.com",
    databaseURL: "https://to-do-list-e2375-default-rtdb.firebaseio.com",
    projectId: "to-do-list-e2375",
    storageBucket: "to-do-list-e2375.appspot.com",
    messagingSenderId: "631999809348",
    appId: "1:631999809348:web:946df0f678a06b776ab911",
    measurementId: "G-W429NE9GHG"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);