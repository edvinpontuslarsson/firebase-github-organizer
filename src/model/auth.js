'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

let accessToken

const getAccessToken = () => accessToken

const login = async () => {
    const provider = new firebase.auth.GithubAuthProvider()
    const userData = await firebase.auth().signInWithPopup(provider)
    accessToken = userData.credential.accessToken
}

/**
 * @returns {Array} as promise
 */
const getUserData = () => firebase.auth().currentUser.providerData

/**
 * Asynchronous
 */
const logOut = () => { firebase.auth().signOut() }

export default {
    login,
    getUserData,
    getAccessToken,
    logOut
}
