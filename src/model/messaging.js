'use strict'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
import storage from './storage'

const initialize = () => {
    const messaging = firebase.messaging()
    messaging.usePublicVapidKey('BJ_QVW8x9sJjL3QOMGQrPqMEQmNBwEofbTQCHckXL-if668bUqb6MWidR2DQdWVZvryCzZXqgtWbF6F6-Fm3UpM')

    messaging.requestPermission()
        .then(() => messaging.getToken())
        .then(token => {
          console.log(token)
          storage.storeToken(token) // make sure this latest token is in DB
        })
        .catch(() => { console.log(`No notifications`) })
}

const getFirebaseMessaging = () => firebase.messaging()

export default {
  initialize,
  getFirebaseMessaging
}