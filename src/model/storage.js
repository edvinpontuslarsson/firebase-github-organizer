'use strict'

import firebase from 'firebase/app'
import 'firebase/database'

/**
 * Replaces any exsting token
 */
const storeMessagingToken = (username, token) => {
  db().ref(`tokens/${username}`).set({ token })
}

const db = () => firebase.database()

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeMessagingToken
}

