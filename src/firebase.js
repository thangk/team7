import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth' 

// for Admins
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

// for Customers
// const firebaseConfig_Customers = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY_CUSTOMERS,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_CUSTOMERS,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_CUSTOMERS,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_CUSTOMERS,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_CUSTOMERS,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID_CUSTOMERS
// }

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// export const appCustomers = initializeApp(firebaseConfig_Customers)
// export const authCustomers = getAuth(appCustomers)

