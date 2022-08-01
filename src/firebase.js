import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth' 

// for Admins
const firebaseConfig_Admins = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY_ADMINS,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_ADMINS,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_ADMINS,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_ADMINS,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_ADMINS,
    appId: process.env.REACT_APP_FIREBASE_APP_ID_ADMINS
}

// for Customers
const firebaseConfig_Customers = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY_CUSTOMERS,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_CUSTOMERS,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_CUSTOMERS,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_CUSTOMERS,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_CUSTOMERS,
    appId: process.env.REACT_APP_FIREBASE_APP_ID_CUSTOMERS
}

export const appAdmins = initializeApp(firebaseConfig_Admins)
export const authAdmins = getAuth(appAdmins)

// export const appCustomers = initializeApp(firebaseConfig_Customers)
// export const authCustomers = getAuth(appCustomers)

