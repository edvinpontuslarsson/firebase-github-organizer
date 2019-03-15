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

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(message => {
    const options = { body: message.body }
    
    return self.registration.showNotification(
        message.title, options
    )
})

