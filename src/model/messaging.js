'use strict'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'
import storage from './storage'

const initialize = () => {
    const messaging = firebase.messaging()
    messaging.usePublicVapidKey('BJ_QVW8x9sJjL3QOMGQrPqMEQmNBwEofbTQCHckXL-if668bUqb6MWidR2DQdWVZvryCzZXqgtWbF6F6-Fm3UpM')

    // following this demo: https://www.youtube.com/watch?v=BsCBCudx58g
    messaging.requestPermission()
        .then(() => messaging.getToken())
        .then(token => { storage.storeMessagingToken(token) })
        .catch(err => { console.log('No notifications... ' + err) })

    messaging.onMessage(payload => {
      console.log('Message received: ' + payload)  
    })
}

export default { initialize }

