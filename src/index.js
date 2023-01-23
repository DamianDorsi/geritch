import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";

import './index.css';
import App from './App';

const firebaseConfig = {
    apiKey: "AIzaSyDyfW_G1FbDk46uX-dU0JHEkV2lL0J7N90",
    authDomain: "gericht-6da8a.firebaseapp.com",
    projectId: "gericht-6da8a",
    storageBucket: "gericht-6da8a.appspot.com",
    messagingSenderId: "624491781979",
    appId: "1:624491781979:web:64fbb8224b1ca1c789c47e"
  };

initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

