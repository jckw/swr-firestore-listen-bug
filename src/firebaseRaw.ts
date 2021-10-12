import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBEXNKYP8Dim2zvtC8T90DgzW4qkw_UATc",
  authDomain: "swr-firestore-bug.firebaseapp.com",
  projectId: "swr-firestore-bug",
  storageBucket: "swr-firestore-bug.appspot.com",
  messagingSenderId: "105899675261",
  appId: "1:105899675261:web:5c8971549248f6b84cab14",
})

export default app
