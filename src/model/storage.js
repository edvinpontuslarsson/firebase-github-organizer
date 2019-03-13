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
  const token = await getToken()

  db().ref(
    `organizations/${orgName}/subscriptions/${eventType}/${username}`
  ).set({ token })
}

const isSubscribed = (orgName, eventType) =>
  new Promise(async resolve => {
    const username = auth.getUsername()
    const exists = await db().ref(
      `organizations/${orgName}/subscriptions/${eventType}/${username}`
    ).once('value')
    resolve(exists)
  })

const db = () => firebase.database()

/**
 * @returns {Promise<String>}
 */
const getToken = () => 
  db().ref(`tokens/${username}`).once('value')

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeToken,
  storeSubscription,
  isSubscribed
}