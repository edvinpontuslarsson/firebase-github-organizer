'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

let userData

const isLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
        userData = user
        console.log(user)
    })

    return userData !== null
}

const login = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
}

const getUserData = () => userData

/**
 * @returns {Promise}
 */
const logOut = () => firebase.auth().signOut()

export default {
    isLoggedIn,
    login,
    getUserData,
    logOut
}
