/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB9UHObvwef_jynxIGcFN93eujffX3mNmc',
  authDomain: 'nuxtstrap.firebaseapp.com',
  projectId: 'nuxtstrap',
  storageBucket: 'nuxtstrap.appspot.com',
  messagingSenderId: '546162343698',
  appId: '1:546162343698:web:3bd95b4fc4e670b0effdcb'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
