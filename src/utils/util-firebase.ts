import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

export const firebaseAuth = getAuth(firebase);

export async function firestore() {
  try {
    const { getFirestore } = await import('firebase/firestore');
    return getFirestore(firebase);
  } catch (error) {
    throw new Error('Firestore Load Error: Firestore를 불러올 수 없습니다.');
  }
}

export async function firebaseStorage() {
  try {
    const { getStorage } = await import('firebase/storage');
    return getStorage(firebase);
  } catch (error) {
    throw new Error('Storage Load Error: Storage를 불러올 수 없습니다.');
  }
}

// export const firebaseAnalytics = getAnalytics(firebase);
