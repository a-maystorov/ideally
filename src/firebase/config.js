import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCXNvlqf2tudGPnc3Pr6j5OzPL1tAyHAQ0',
    authDomain: 'ourdojo-ad439.firebaseapp.com',
    projectId: 'ourdojo-ad439',
    storageBucket: 'ourdojo-ad439.appspot.com',
    messagingSenderId: '308512696414',
    appId: '1:308512696414:web:78df478b111a3f4c92eccf',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };