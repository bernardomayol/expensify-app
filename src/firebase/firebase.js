// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';
import moment from 'moment';

// Add the Firebase services that you want to use
//import "firebase/auth";
import 'firebase/firebase-database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIRENASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses').push({
//   description: 'Gun',
//   note: '',
//   amount: 195,
//   createAt: 0,
// });
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createAt: moment(0).subtract(4, 'days').valueOf(),
// });

// database.ref('expenses').push({
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createAt: moment(0).add(4, 'days').valueOf(),
// });

// database.ref('expenses').on(
//   'value',
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((dataSnapShot) => {
//       expenses.push({
//         id: dataSnapShot.key,
//         ...dataSnapShot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (error) => {
//     console.log('Fetching error: ', error);
//   }
// );
// database.ref('expenses').once('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((dataSnapShot) => {
//     expenses.push({
//       id: dataSnapShot.key,
//       ...dataSnapShot.val()
//     });
//   });
//   console.log(expenses)
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const {name, job, location} = snapshot.val()
//   console.log(`${name} is ${job.title} in ${location.city}`)
// })

// database.ref('location/city').once('value').then((snapshot)=> {
//   console.log(snapshot.val())
// }).catch(()=>{
//   console.log('Error fetching data: ', error)
// })

// database
//   .ref()
//   .set({
//     name: 'Bernardo',
//     age: 55,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     isSingle: false,
//     location: {
//       city: 'La Paz',
//       country: 'Mexico',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((error) => {
//     console.log('Error Failed: ', error);
//   });

// database.ref().update({stressLevel: 9, 'location/city': 'Seatle', 'job/company': 'Amazon'})
// database.ref('location/city').set('Xalapa');

//database.ref('isSingle').set(null)

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('data removed');
//   })
//   .catch((error) => {
//     console.log('Error removing: ', error);
//   });
