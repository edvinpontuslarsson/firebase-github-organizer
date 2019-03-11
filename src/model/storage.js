'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import cryptoRandomString from 'crypto-random-string'

/**
 * Stores token with GitHub secret
 * Replaces any exsting token
 */
const storeTokenWithSecret = token => {
  // try to get user secret, if empty, generate new one

  // snapshot.key()

  const secret = cryptoRandomString(10)
  db().ref(`tokens/${secret}`).set({ token })
}

const db = () => firebase.database()

/**
 * @returns {Promise<String>} null if none exists
 */
const getSecretIfExists = username => new Promise(resolve => {
  db().ref(`secrets/${username}`).once('value')
    .then(snapshot => resolve(snapshot.key()))
})

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeTokenWithSecret
}

