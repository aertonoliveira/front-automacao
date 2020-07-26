
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyD2XUJ2bskrx4WKuR9ST4XW1i_iDR5ACAA",
    authDomain: "vito-a3451.firebaseapp.com",
    databaseURL: "https://vito-a3451.firebaseio.com",
    projectId: "vito-a3451",
    storageBucket: "vito-a3451.appspot.com",
    messagingSenderId: "872071437017",
    appId: "1:872071437017:web:307a7e89940984b55bbcc8",
    measurementId: "G-BBHZGCB46M"
};

const fire =firebase.initializeApp(config);
export default fire;
