'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import cryptoRandomString from 'crypto-random-string'

/**
 * Stores token with GitHub secret
 * Replaces any exsting token
 */
const storeTokenWithSecret = token => {
  const secret = cryptoRandomString(10)
  db().ref(`tokens/${secret}`).set({ token })
}

const db = () => firebase.database()

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeTokenWithSecret
}

