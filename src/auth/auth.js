'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

/**
 * Auth module
 */
export default () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)

    // TODO: return promise with token?

    /**
     * Function inspired by documentation here:
     * https://firebase.google.com/docs/auth/web/github-auth
     */
    firebase.auth().getRedirectResult().then(result => {
        // Github Acess Token to access their API
        if (result.credential) console.log(
            `GH access token: ${result.credential.accessToken}`
        )

        console.log(`User info ${result.user}`)
    }).catch(err => {
        console.log(
            `
            Error code: ${err.code}
            Error message: ${err.message}
            `
        )
    })
}
