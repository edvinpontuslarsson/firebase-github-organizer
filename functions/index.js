const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp()

const app = express()

// enables Cross-Origin Resource Sharing
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
    const data = req.body

    const db = functions.database()
    const token =  ''

    const message = {
        data,
        token
    }

    // TODO: set in DB latest/${username}, listen for that in client

    // TODO: get secret from DB, make sure from GitHub
    // generate random string in client and store in DB

    // sends message to service worker corresponding to token
    admin.messaging().send(message)
        .catch((error) => {
            console.log(`Sending message failed. Error: ${error}`)
        })

    res.sendStatus(200)
})

const server = functions.https.onRequest(app)

module.exports = { server }

