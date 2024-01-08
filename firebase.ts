import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCOCe4elfZP8kLE4TiaHfPbmRDsVrYpuBg',
  authDomain: 'dropbox-clone-7fbda.firebaseapp.com',
  projectId: 'dropbox-clone-7fbda',
  storageBucket: 'dropbox-clone-7fbda.appspot.com',
  messagingSenderId: '564409144144',
  appId: '1:564409144144:web:b6045265e9d1262cf69255',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
