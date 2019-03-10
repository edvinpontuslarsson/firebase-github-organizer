const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')


/*
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res) => {
    // send message to client app with node,
    // see here: https://firebase.google.com/docs/cloud-messaging/js/first-message
    
    // receive on client: https://firebase.google.com/docs/cloud-messaging/js/receive

})
*/

admin.initializeApp()

const app = express()

// https://codeburst.io/express-js-on-cloud-functions-for-firebase-86ed26f9144c
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
    const data = req.body

    // get token dynamically from username from db later
    const token = "fgLBDcbz_Qo:APA91bHX-OEI5OIvaBr1-LBVhzF8nfQLv-IcfJV11RE-18qG9OqtdAMVGWaZjYJji10wNjs5m-yVCY2WfbwO13EGf7ZN5KMc5pXVf_aPSyajKvCF6g1g04X9F56Wks0bY3Z98oF93Lvs"

    const message = {
        data,
        token
    }

    // from firebase documentation:
    // Send a message to the device
    // corresponding to the provided
    // registration token.
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response)
        })
        .catch((error) => {
            console.log('Error sending message:', error)
        })
})

const server = functions.https.onRequest(app)

// https://codeburst.io/express-js-on-cloud-functions-for-firebase-86ed26f9144c
module.exports = { server }

