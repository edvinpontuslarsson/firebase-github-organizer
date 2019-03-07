'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

let username
let accessToken

const getUsername = () => username

const getAccessToken = () => accessToken

const login = async () => {
    const provider = new firebase.auth.GithubAuthProvider()
    provider.addScope('admin:org')

    const userData = await firebase.auth().signInWithPopup(provider)
    
    username = userData.additionalUserInfo.username
    accessToken = userData.credential.accessToken
}

/**
 * @returns {Array}
 */
const getUserData = () => 
    firebase.auth().currentUser.providerData

/**
 * Asynchronous
 */
const logOut = () => { firebase.auth().signOut() }

export default {
    login,
    getUserData,
    getUsername,
    getAccessToken,
    logOut
}
