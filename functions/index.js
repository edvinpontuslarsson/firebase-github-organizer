const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp()

const app = express()

// enables Cross-Origin Resource Sharing
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
    const eventHeader = req.headers['x-custom-event']
    
    if (eventHeader === 'repository' ||
        eventHeader === 'release' ||
        eventHeader === 'issues' ||
        eventHeader === 'push') {
            
            // TODO:
            // put in db, latest update for org,
            // client then knows to re-fetch

            notifySubscribers(eventHeader, req.body)
            
            return res.sendStatus(200)
        } else {
            return res.sendStatus(200)
        } 
})

const notifySubscribers = (eventHeader, reqBody) => {
    getSubTokens(eventHeader, reqBody).then(tokens => {/*
        tokens.forEach(token => {
            const title =
                `GitHub update in ${reqBody.repository.full_name}`
            const body =
                `${eventHeader} ${reqBody.action}`

            const message = {
                data: {
                    title,
                    body
                },
                token
            }

            admin.messaging().send(message)
                .then(() => { console.log(`Messaged ${token} successfully`)})
                .catch(error => { console.error(error) })
        })*/
    })
}

const getSubTokens = (eventHeader, reqBody) => 
    new Promise(resolve => {
        // then get tokens from usernames

        /**
         * const getToken = username => new Promise(resolve => {
                db().ref(`tokens/${username}/token`).once('value', snapshot => {
                    resolve(snapshot.val())
                })
            })
         */

        getSubNames(eventHeader, reqBody)
            .then(subNames => {
                console.log(subNames)
            })
    })

const getSubNames = (eventHeader, reqBody) =>
    new Promise(resolve => {
        admin.database().ref(
            `organizations/${reqBody.sender.login}/subscriptions/${eventHeader}`
        ).once('value', snapshot => {
            const tokens = Object.values(snapshot.val())
                .map(item => item.username)

            resolve(tokens)

           resolve(snapshot.val())
        })
    })

const server = functions.https.onRequest(app)

module.exports = { server }

