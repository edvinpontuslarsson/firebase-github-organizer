'use strict'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
import storage from './storage'

// TODO: a good way of initializing & then getting token

// initialize & listen from index.html, can then update view

const initialize = () => {
  const messaging = firebase.messaging()
  messaging.usePublicVapidKey('BJ_QVW8x9sJjL3QOMGQrPqMEQmNBwEofbTQCHckXL-if668bUqb6MWidR2DQdWVZvryCzZXqgtWbF6F6-Fm3UpM')

  messaging.requestPermission().catch(() => {
    console.log('No notifications')
  })
}

/**
 * @returns {Promise<String>} this user's current token
 */
const getToken = () => firebase.messaging().getToken()

export default {
  initialize,
  getToken
}

