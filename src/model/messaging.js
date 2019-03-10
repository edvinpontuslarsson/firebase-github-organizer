'use strict'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

const initialize = () => {
    const messaging = firebase.messaging()
    messaging.usePublicVapidKey('BJ_QVW8x9sJjL3QOMGQrPqMEQmNBwEofbTQCHckXL-if668bUqb6MWidR2DQdWVZvryCzZXqgtWbF6F6-Fm3UpM')

    // following this demo: https://www.youtube.com/watch?v=BsCBCudx58g
    messaging.requestPermission()
        .then(() => {
            console.log('User allows notifications')
            return getToken()
        })
        .then(token => {
            // for now, send token to DB, only do on refreshs later
            
        })
        .catch(err => { console.log('No notifications... ' + err) })

    messaging.onTokenRefresh(async () => {
        const newToken = await messaging.getToken()
        
        // TODO: send token to server
    })

    messaging.onMessage(payload => {
      console.log('Message received: ' + payload)  
    })
}

export default { initialize }

