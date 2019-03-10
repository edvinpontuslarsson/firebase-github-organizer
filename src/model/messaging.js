'use strict'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

const initialize = () => {
    const messaging = firebase.messaging()
    // messaging.usePublicVapidKey('AAAAv0Hd0sM:APA91bFXXwS8x3tSPhENNlVZSsuFionzjYtvqihGTznwBaOMk6HE8LRwpiYGsBmVywDUIBUsadRyXha-eFPXBXuHJXA3tWUUf0_IDX9g063tv5-m08Br44wVNJs_Lfq6WqW3D-YW8tXo')

    // following this documentation: https://firebase.google.com/docs/cloud-messaging/js/client
    messaging.requestPermission()
        .then(() => {
            console.log('User allows notifications')
        })
        .catch(err => {
            console.log(err + 'No notifications for you!')
        })
}

export default { initialize }

