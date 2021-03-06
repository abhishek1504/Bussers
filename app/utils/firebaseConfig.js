import firebase from '@react-native-firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyBSWm1hRUSuzEVOkmSdb06xgd2H6E3bNyU',
  authDomain: 'bussr-306811.firebaseapp.com',
  databaseURL: 'https://bussr-306811-default-rtdb.firebaseio.com',
  projectId: 'bussr-306811',
  storageBucket: 'bussr-306811.appspot.com',
  messagingSenderId: '722104691342',
  appId: '1:722104691342:web:1b7cb655f25a1f115b77df',
  measurementId: 'G-LRZ9WPDSM9',
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.db();
