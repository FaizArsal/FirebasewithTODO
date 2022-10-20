import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIxVyDpgr-jIYBqLQUGvDlSC6z098MxT4",
authDomain: "fir-todo-59261.firebaseapp.com",
databaseURL: "https://fir-todo-59261-default-rtdb.firebaseio.com",
projectId: "fir-todo-59261",
storageBucket: "fir-todo-59261.appspot.com",
messagingSenderId: "184689137797",
appId: "1:184689137797:web:ab188bc4e5ffba9cda31ec"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

