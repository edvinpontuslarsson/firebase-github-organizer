const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp()

const app = express()

/**
 * /////////// 
 * OBS IMPORTANT INFO!
 * Cloud functions uses old node version,
 * can't handle async-await
 * ///////////
 */

// enables Cross-Origin Resource Sharing
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
    const payload = req.body

    try {
        // messageServiceWorker(payload).then(() => {
            
            // TODO: set in DB latest/${username}, listen for that in client

            // TODO: get secret from DB, make sure from GitHub
            // secret shoud be in db

            // snapshot.key()
            res.status(200)
            
            // Have to return, also up ofc

            return res.json({
                greeting: 'Hello from the clouds!'
            })
        // })
    } catch (error) {
        console.log(`Error sending service worker message: ${error}`)
    }
})

/**
 * Asynchronous
 * @param payload - req.body
 */
const messageServiceWorker = payload => {
    try {
        getToken(payload).then(token => {
            const message = { data: payload, token }
    
            admin.messaging().send(message)
            resolve()
        })
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

    // TODO: 
    /**
     * get whole org repository/release/issues/push object,
     * message all tokens
     */

    // admin.database().ref(`tokens/${secret}`).once('value')
        .then(snapshot => resolve(snapshot.val().token))
        .catch(error => reject(new Error(error)))
})

const server = functions.https.onRequest(app)

module.exports = { server }

