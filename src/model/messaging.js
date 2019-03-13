'use strict'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
import storage from './storage'

const initialize = () => {
  const messaging = firebase.messaging()
  messaging.usePublicVapidKey('BJ_QVW8x9sJjL3QOMGQrPqMEQmNBwEofbTQCHckXL-if668bUqb6MWidR2DQdWVZvryCzZXqgtWbF6F6-Fm3UpM')

  messaging.requestPermission()
    .then(token => { storage.storeToken(token) })
    .catch(() => { console.log('No notifications') })
}

export default {
  initialize
}

