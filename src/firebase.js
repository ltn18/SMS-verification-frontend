import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const app = firebase.firebaseConfig({
  apiKey: "AIzaSyDvU9AHJgLaiQ4_ITBI5UPZQbPOjBbkKNs",
  authDomain: "skipli-oa.firebaseapp.com",
  databaseURL: "https://skipli-oa-default-rtdb.firebaseio.com",
  projectId: "skipli-oa",
  storageBucket: "skipli-oa.appspot.com",
  messagingSenderId: "240626011422",
  appId: "1:240626011422:web:26ede98619b7239807cd0f",
  measurementId: "G-E6Z7YJ2BSX",
});

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export default app;
