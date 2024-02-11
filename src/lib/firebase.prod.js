import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  // apiKey: 'AIzaSyCev-C6AKuyxD8oXcGwuAyyGmWpo7INl3U',
  // authDomain: 'netflix-test01.firebaseapp.com',
  // databaseURL: 'https://netflix-test01.firebaseio.com',
  // projectId: 'netflix-test01',
  // storageBucket: 'netflix-test01.appspot.com',
  // messagingSenderId: '541152959854',
  // appId: '1:541152959854:web:38145f65984eef0cd3757f',
  apiKey: "AIzaSyC-bDlCPl3pKJe0dUMd9dV1wNXHQj2Tzo0",
  authDomain: "netfilz.firebaseapp.com",
  projectId: "netfilz",
  storageBucket: "netfilz.appspot.com",
  // databaseURL: 'https://netflix-test01.firebaseio.com',
  databaseURL: 'https://netfliz.firebaseio.com',
  messagingSenderId: "132878463171",
  appId: "1:132878463171:web:8ab6ea588a0e3060f67276",
  measurementId: "G-NP5CTZVDMZ"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
