import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCW808Uy0iBT8rvEst548vrcuGFxWZWTPk",
    authDomain: "twitter-clone-e1691.firebaseapp.com",
    projectId: "twitter-clone-e1691",
    storageBucket: "twitter-clone-e1691.appspot.com",
    messagingSenderId: "902244295169",
    appId: "1:902244295169:web:ec9f45df22fdeeea195600",
    measurementId: "G-S46VPJK3RP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;