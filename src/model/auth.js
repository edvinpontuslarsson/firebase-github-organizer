'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

const login = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
}

/**
 * @returns {Promise}
 */
const logOut = () => firebase.auth().signOut()

export default {
    login,
    logOut
}
