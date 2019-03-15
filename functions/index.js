const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp()

const app = express()

// enables Cross-Origin Resource Sharing
app.use(cors({ origin: true }))

app.post('/', (req, res) => { // for testing, replace later
    const eventHeader = req.headers['x-custom-event']
    console.log(eventHeader)
    if (eventHeader === 'repository' ||
        eventHeader === 'release' ||
        eventHeader === 'issues' ||
        eventHeader === 'push') {
            notifySubscribers(eventHeader, req.body)
                .then(() => {
                    return res.sendStatus(200)
                })
        } else {
            return res.sendStatus(200)
        } 
})

// OK, can today simulate GH hooks w. postman,
// subscribed to issues

const notifySubscribers = (eventHeader, reqBody) => {
    getSubTokens(eventHeader, reqBody).then(tokens => {
            
        console.log('Logging works?')
        console.log(tokens)

        /**
         * const message = { data: payload, token }
    
            admin.messaging().send(message)
         */
    })
}

const getSubTokens = (eventHeader, reqBody) =>
    new Promise(resolve => {
        admin.database().ref(
            `organizations/${reqBody.sender.login}
            /subscriptions/${eventHeader}`
        ).once('value', snapshot => {
            resolve(snapshot.val())
        })
    })

const server = functions.https.onRequest(app)

module.exports = { server }

