import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebaseInitialize from "../firebase/firebaseInitialization";

firebaseInitialize();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleRegister = (name, email, pass) => {
        setIsLoading(true)
        console.log(name, email, pass)
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {

                const userData = result.user;
                setUser(userData);
                handleUserDatabase(name.toLowerCase(), email.toLowerCase(), 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch(error => {
                        setError(error.massege)
                    })

            })
            .catch(error => {
                setError(error.massege)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleLogin = (email, pass) => {
        setIsLoading(true)
        console.log(email, pass)
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const userData = result.user
                setUser(userData)
                console.log(userData)
            })
            .catch(error => {
                setError(error.massege)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleGoogleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user;
                setUser(googleUser)
                handleUserDatabase(googleUser.displayName.toLowerCase(), googleUser.email.toLocaleLowerCase(), 'PUT')

            })
            .catch(error => {
                setError(error.massege)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://doctocare.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                console.log(data.admin)

            })
        setIsLoading(false)

    }, [user.email])
    const handleUserDatabase = (name, email, method) => {
        const user = { name: name, email: email }
        fetch('https://doctocare.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.massege)
            })
    }
    return {
        user,
        error,
        isLoading,
        admin,
        handleRegister,
        handleLogin,
        handleLogOut,
        handleGoogleSignIn
    }

}
export default useFirebase;