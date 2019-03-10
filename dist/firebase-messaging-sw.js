// this is a service worker file

importScripts('https://www.gstatic.com/firebasejs/5.8.6/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.8.6/firebase-messaging.js')

const config = {
    apiKey: 'AIzaSyBDrSwWXn2AklmSJtlGTJ37jpUXorwyv1c',
    authDomain: 'gitedvinhub.firebaseapp.com',
    databaseURL: 'https://gitedvinhub.firebaseio.com',
    projectId: 'gitedvinhub',
    storageBucket: 'gitedvinhub.appspot.com',
    messagingSenderId: '821443809987'
}
firebase.initializeApp(config)

// initializes Firebase Cloud messaging
const messaging = firebase.messaging()

// uses code from this demo: https://www.youtube.com/watch?v=BsCBCudx58g
messaging.setBackgroundMessageHandler(payload => {
    const title = 'GitHub update'
    const options = { body: payload }

    return self.registration.showNotification(
        title, options
    )
})

