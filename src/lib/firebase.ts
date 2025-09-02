
'use client';

import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  projectId: "sri-krishna-goshala-online",
  appId: "1:466975372335:web:0748a7485cc72c7de702da",
  storageBucket: "sri-krishna-goshala-online.firebasestorage.app",
  apiKey: "AIzaSyCr3wKpSUab-GzIK_Z9kH9kGlVK_6AtZgM",
  authDomain: "sri-krishna-goshala-online.firebaseapp.com",
  messagingSenderId: "466975372335"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
