import React, { useContext, createContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updatePassword,
 } from 'firebase/auth'

const AuthContext = createContext()


export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();

    // const [loggedInAdmin, setLoggedInAdmin] = useState(null);

    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        return signOut(auth)
    }

    const updateCurrentUserPassword = (password) => {
        return updatePassword(currentUser, password)
    }

    // const deleteAccount = () => {
    //     return
    // }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {
            // console.log(admin)
            setCurrentUser(user)
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])


    const value = {
        currentUser,
        signup,
        signin,
        signout,
        updateCurrentUserPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}