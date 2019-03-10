'use strict'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

const initialize = () => {
    const messaging = firebase.messaging()
    // messaging.usePublicVapidKey('AAAAv0Hd0sM:APA91bFXXwS8x3tSPhENNlVZSsuFionzjYtvqihGTznwBaOMk6HE8LRwpiYGsBmVywDUIBUsadRyXha-eFPXBXuHJXA3tWUUf0_IDX9g063tv5-m08Br44wVNJs_Lfq6WqW3D-YW8tXo')

    // following this demo: https://www.youtube.com/watch?v=BsCBCudx58g
    messaging.requestPermission()
        .then(() => {
            console.log('User allows notifications')
            return messaging.getToken()
        })
        .then(token => {
            // TODO: store token in cloud,
            // to be able to send messages to it

            // use token for fcm API

            console.log(token)
        })
        .catch(err => {
            console.log(err + 'No notifications for you!')
        })

    messaging.onMessage(payload => {
      console.log('Message received: ' + payload)  
    })
}

export default { initialize }

