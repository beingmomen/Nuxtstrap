/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC8nfZnagAlsna5aVkylZ4C0AFQ6wNlJ2Y',
  authDomain: 'nuxtstrap-999a5.firebaseapp.com',
  projectId: 'nuxtstrap-999a5',
  storageBucket: 'nuxtstrap-999a5.appspot.com',
  messagingSenderId: '455970293575',
  appId: '1:455970293575:web:3356a506ec2945797aee62'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
