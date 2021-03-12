import firebase from 'firebase';
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDSNGn4B_o6ZjUK15s3Fx6NdtfsHvA0A6E",
    authDomain: "hostingtest-d385f.firebaseapp.com",
    projectId: "hostingtest-d385f",
    storageBucket: "hostingtest-d385f.appspot.com",
    messagingSenderId: "1087758383017",
    appId: "1:1087758383017:web:9a2b021220450cfe62f6b8"
};

const firebaseData = firebase.initializeApp(firebaseConfig);

export default firebaseData;
