'use strict'

import firebase from 'firebase/app'
import 'firebase/database'

/**
 * Replaces any exsting token
 */
const storeMessagingToken = (username, token) => {
  firebase.database()
    .ref(`tokens/${username}`).set({ token })
}

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeMessagingToken
}

