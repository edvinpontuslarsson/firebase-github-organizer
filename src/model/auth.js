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


const login = async () => {
    const provider = new firebase.auth.GithubAuthProvider()
    userData = await firebase.auth().signInWithPopup(provider)
    console.log(userData.credential.accessToken)
}

const getUserData = () => userData

/**
 * Asynchronous
 */
const logOut = () => firebase.auth().signOut()

export default {
    isLoggedIn,
    login,
    getUserData,
    logOut
}
