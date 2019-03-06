'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

let userData

const isLoggedIn = () => new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
        userData = user
        resolve(userData !== null)
    })
})

// test sign out every time, maybe only if logged in

// has to log in at refresh

const login = async () => {
    const provider = new firebase.auth.GithubAuthProvider()
    userData = await firebase.auth().signInWithPopup(provider)
    // console.log(userData.credential.accessToken)
}

/**
 * @returns {Object}
 */
const getUserData = () => userData

const getTokenPromise = () => firebase.auth().currentUser.getIdToken()

/**
 * Asynchronous
 */
const logOut = () => firebase.auth().signOut()

export default {
    isLoggedIn,
    login,
    getUserData,
    getTokenPromise,
    logOut
}
