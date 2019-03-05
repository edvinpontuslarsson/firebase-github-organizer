'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

const login = () =>
    new Promise(async resolve => {
        const provider = new firebase.auth.GithubAuthProvider()
        firebase.auth().signInWithRedirect(provider)
        
        /**
         * Function inspired by documentation here:
         * https://firebase.google.com/docs/auth/web/github-auth
         *//*
        firebase.auth().getRedirectResult().then(authData => {
            // Github Acess Token to access their API
            if (authData.credential) console.log(
                `GH access token: ${authData.credential.accessToken}`
            )

            console.log(`User info ${authData.user}`)
        }).catch(err => {
            console.error(err)
        })
        */
        const authData = await firebase.auth().getRedirectResult()
        console.log(authData)
        resolve(authData)
    })

const logOut = () =>
    new Promise((resolve, reject) => {
        firebase.auth().signOut()
        .then(() => { resolve() })
        .catch(err => { reject() })
    })

export default {
    login,
    logOut
}
