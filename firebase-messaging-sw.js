importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBky9xxJxyYEA3oJMobUb7KrxUShNKQAHI",
  authDomain: "reminder-tugas-60bb2.firebaseapp.com",
  projectId: "reminder-tugas-60bb2",
  storageBucket: "reminder-tugas-60bb2.firebasestorage.app",
  messagingSenderId: "918392855891",
  appId: "1:918392855891:web:b2d085a1936e9a5fcdd5a6"
});

const messaging = firebase.messaging();
