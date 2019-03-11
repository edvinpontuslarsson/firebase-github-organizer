const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp()

const app = express()

// enables Cross-Origin Resource Sharing
app.use(cors({ origin: true }))

app.post('/', async (req, res) => {
    const payload = req.body

    try {
        await messageServiceWorker(payload)
    } catch (error) {
        console.log(`Error sending service worker message: ${error}`)
    }

    // TODO: set in DB latest/${username}, listen for that in client

    // TODO: get secret from DB, make sure from GitHub
    // secret shoud be in db

    // snapshot.key()

    return res.sendStatus(200)
})

/**
 * Asynchronous
 * @param payload - req.body
 */
const messageServiceWorker = async payload => {
    try {
        const token = await getToken(payload)
        const message = { data: payload, token }
    
        admin.messaging().send(message)
        resolve()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * @param payload - req.body
 * @returns {Promise<String>} null if payload is incorrect
 */
const getToken = payload => new Promise(resolve => {
    const secret = payload.secret

    admin.database().ref(`tokens/${secret}`).once('value')
        .then(snapshot => resolve(snapshot.val()/*.token*/))
        .catch(error => reject(new Error(error)))
})

const server = functions.https.onRequest(app)

module.exports = { server }

