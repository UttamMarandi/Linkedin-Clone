import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAZ7W1-H2yDUYzCgMjFDQiMugUXxO354Uk",
  authDomain: "linkedin-clone-uttam.firebaseapp.com",
  projectId: "linkedin-clone-uttam",
  storageBucket: "linkedin-clone-uttam.appspot.com",
  messagingSenderId: "835879270584",
  appId: "1:835879270584:web:34a4fe6e632c1972431c4d"
};

// connects firebase to the app
const firebaseApp = firebase.initializeApp(firebaseConfig)

//connect database to our app
const db = firebaseApp.firestore()

//get authentication
const auth = firebase.auth()


//we need to export db and auth to have access to those outside this file
export {db, auth}


