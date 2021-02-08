import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC0kI1tjP9BITnQ7UX-WijmQOSHCYl8B1o",
    authDomain: "whatsapp-clone-edaa5.firebaseapp.com",
    projectId: "whatsapp-clone-edaa5",
    storageBucket: "whatsapp-clone-edaa5.appspot.com",
    messagingSenderId: "348304486559",
    appId: "1:348304486559:web:a286178e15a17288c1b2aa",
    measurementId: "G-GLPZ5CZWS9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;