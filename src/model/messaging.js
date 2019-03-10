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
            return messaging.getToken()
        })
        .then(token => {
            // for now, send token to DB, only do on refreshs later

            // continue from here:
            // https://firebase.google.com/docs/cloud-messaging/js/first-message

            // Will probably use Firebase Realtime Database, can use both this and firestore
            // https://firebase.google.com/docs/database/
            console.log(token)                            
        })
        .catch(err => { console.log('No notifications... ' + err) })

    messaging.onTokenRefresh(async () => {
        const newToken = await messaging.getToken()
        console.log(newToken)
        
        // TODO: send token to server
    })

    messaging.onMessage(payload => {
      console.log('Message received: ' + payload)  
    })
}

export default { initialize }

