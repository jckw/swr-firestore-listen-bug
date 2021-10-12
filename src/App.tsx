import React from "react"
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore"
import Main from "./Main"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEXNKYP8Dim2zvtC8T90DgzW4qkw_UATc",
  authDomain: "swr-firestore-bug.firebaseapp.com",
  projectId: "swr-firestore-bug",
  storageBucket: "swr-firestore-bug.appspot.com",
  messagingSenderId: "105899675261",
  appId: "1:105899675261:web:5c8971549248f6b84cab14",
}

const fuego = new Fuego(firebaseConfig)

function App() {
  return (
    <FuegoProvider fuego={fuego}>
      <Main />
    </FuegoProvider>
  )
}

export default App
