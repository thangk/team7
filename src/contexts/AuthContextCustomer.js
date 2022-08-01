import React, { useContext, createContext, useState, useEffect } from 'react'
import { authCustomer } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updatePassword,
 } from 'firebase/auth'

const CustomerContext = createContext()


export const useAuthCustomer = () => {
    return useContext(CustomerContext)
}

export const AuthContextProviderCustomer = ({ children }) => {

    const [currentCustomer, setCurrentCustomer] = useState();

    const [loggedInCustomer, setLoggedInCustomer] = useState(null);

    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(authCustomer, email, password)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(authCustomer, email, password)
    }

    const signout = () => {
        return signOut(authCustomer)
    }

    const updateCurrentUserPassword = (password) => {
        return updatePassword(currentCustomer, password)
    }

    // const deleteAccount = () => {
    //     return
    // }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(authCustomer, customer => {
            // console.log(customer)
            setCurrentCustomer(customer)
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])


    const value = {
        currentCustomer,
        loggedInCustomer,
        setLoggedInCustomer,
        signup,
        signin,
        signout,
        updateCurrentUserPassword
    }

    return (
        <CustomerContext.Provider value={value}>
            {!loading && children}
        </CustomerContext.Provider>
    )
}