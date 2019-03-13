'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import auth from './auth'
import cryptoRandomString from 'crypto-random-string' // maybe for 1 GH secret

const storeToken = token => {
  const username = auth.getUsername()
  db().ref(`tokens/${username}`).set({ token })
}

const storeSubscription = async (orgName, eventType) => {
  const username = auth.getUsername()
  const token = await getToken(username)

  db().ref(
    `organizations/${orgName}/subscriptions/${eventType}/${username}`
  ).set({ token })
}

const isSubscribed = (orgName, eventType) =>
  new Promise(async resolve => {
    const username = auth.getUsername()
    const token = await getToken(username)
    console.log('token: ' + token)
    // https://stackoverflow.com/questions/37910008/check-if-value-exists-in-firebase-db

    db().ref(
      `organizations/${orgName}/subscriptions/${eventType}/${username}/token`
    ).once('value', snapshot => {
      resolve(snapshot.exists())
    })
  })

const db = () => firebase.database()

/**
 * @param {String} username 
 * @returns {Promise<String>}
 */
const getToken = username => new Promise(resolve => {
  db().ref(`tokens/${username}/token`).once('value', snapshot => {
    resolve(snapshot.val())
  })
})

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeToken,
  storeSubscription,
  isSubscribed
}