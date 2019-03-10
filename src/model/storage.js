'use strict'

import firebase from 'firebase/app'
import 'firebase/database'

/**
 * Replaces any exsting token
 * @param {String} token 
 */
const storeMessagingToken = token => {
  firebase.database().ref('tokens').set({ token })
}

export default {
  storeMessagingToken
}

