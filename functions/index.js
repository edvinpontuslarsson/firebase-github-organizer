const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp()

const app = express()

// enables Cross-Origin Resource Sharing
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
    const eventHeader = req.headers['X-GitHub-Event']

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
    // TODO: 
    /**
     * get whole org repository/release/issues/push object,
     * message all tokens
     */
})

// OK, can today simulate GH hooks w. postman,
// subscribed to issues

const notifySubscribers = (eventHeader, reqBody) => {
    getSubTokens(eventHeader, reqBody).then(tokens => {
        
    })
}

const getSubTokens = (eventHeader, reqBody) => {
    admin.database().ref(/** query here, etc */)
}

const server = functions.https.onRequest(app)

module.exports = { server }

