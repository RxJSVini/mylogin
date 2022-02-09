import firebaseCon from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCmZ_vK5JIY3nm6wNbCIx71MKbAP2QEYWQ",
    authDomain: "sujeitopost-68ca0.firebaseapp.com",
    projectId: "sujeitopost-68ca0",
    storageBucket: "sujeitopost-68ca0.appspot.com",
    messagingSenderId: "463203469383",
    appId: "1:463203469383:web:8fac78da278e2755aa8962",
    measurementId: "G-TRHD4P81FN"
};

if(!firebaseCon.apps.length){
    firebaseCon.initializeApp(firebaseConfig);
}

export default firebaseCon;


