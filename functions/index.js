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
    // generate random string in client and store in DB

    return res.sendStatus(200)
})

/**
 * Asynchronous
 * @param payload - req.body
 */
const messageServiceWorker = payload =>
    new Promise(async (resolve, reject) => {
        const token = await getToken(payload)

        const message = { data: payload, token }
        
        admin.messaging().send(message)
            .catch(err => reject(err))
        resolve()
    })

/**
 * @param payload - req.body
 * @returns {Promise<String>}
 */
const getToken = payload => new Promise(resolve => {
    const secret = payload.secret

    admin.database().ref(`tokens/${secret}`).once('value')
        .then(snapshot => resolve(snapshot.val().secret))
        .catch(() => resolve(null))
})

const server = functions.https.onRequest(app)

module.exports = { server }

