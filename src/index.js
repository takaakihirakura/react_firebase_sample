import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

// firebase上に記載されている認証情報を指定する
firebase.initializeApp({
  apiKey: "…",
  authDomain: "…",
  databaseURL: "…",
  projectId: "…",
  storageBucket: "…",
  messagingSenderId: "…",
  appId: "…"
})

const db = firebase.firestore();

db.collection('pokemons').limit(1).get().then((response) => {
  response.forEach((doc) => {
    const document = doc.data();
    console.log(document.name);
  })
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
