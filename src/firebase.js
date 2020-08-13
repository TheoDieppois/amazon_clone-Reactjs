import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB1bHUJqAxLkTxkdgAcSJRg_PSZqcdiPxw",
    authDomain: "clone-3d4fc.firebaseapp.com",
    databaseURL: "https://clone-3d4fc.firebaseio.com",
    projectId: "clone-3d4fc",
    storageBucket: "clone-3d4fc.appspot.com",
    messagingSenderId: "359034955276",
    appId: "1:359034955276:web:9662c2785a11fc1158b029",
    measurementId: "G-R67M5J6ZS7"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}