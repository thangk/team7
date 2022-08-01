import React, { useContext, createContext, useState, useEffect } from 'react'
import { authAdmins } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updatePassword,
 } from 'firebase/auth'

const AdminContext = createContext()


export const useAuthAdmin = () => {
    return useContext(AdminContext)
}

export const AuthContextProviderAdmin = ({ children }) => {

    const [currentAdmin, setCurrentAdmin] = useState();

    const [loggedInAdmin, setLoggedInAdmin] = useState(null);

    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(authAdmins, email, password)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(authAdmins, email, password)
    }

    const signout = () => {
        return signOut(authAdmins)
    }

    const updateCurrentUserPassword = (password) => {
        return updatePassword(currentAdmin, password)
    }

    // const deleteAccount = () => {
    //     return
    // }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(authAdmins, admin => {
            // console.log(admin)
            setCurrentAdmin(admin)
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])


    const value = {
        currentAdmin,
        loggedInAdmin,
        setLoggedInAdmin,
        signup,
        signin,
        signout,
        updateCurrentUserPassword
    }

    return (
        <AdminContext.Provider value={value}>
            {!loading && children}
        </AdminContext.Provider>
    )
}