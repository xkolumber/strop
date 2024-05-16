import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe2p5gigfxDr9l1ngkofP8P8cqDkGHa0E",
  authDomain: "strop-8bbc9.firebaseapp.com",
  projectId: "strop-8bbc9",
  storageBucket: "strop-8bbc9.appspot.com",
  messagingSenderId: "101990014656",
  appId: "1:101990014656:web:dd614af1c6690462d1d725",
  measurementId: "G-0D077QR22H",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
