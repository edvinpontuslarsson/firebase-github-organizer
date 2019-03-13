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

    // https://stackoverflow.com/questions/37910008/check-if-value-exists-in-firebase-db

    // ref without () ???
    db().ref.child(
      `organizations/${orgName}/subscriptions/${eventType}`
    ).orderByChild('token').equalTo(token).once('value', snapshot => {
      resolve(snapshot.exists())
    })
    /*
   const username = auth.getUsername()
    const exists = await db().ref(
      `organizations/${orgName}/subscriptions/${eventType}/${username}`
    ).once('value')
    resolve(exists)
    */
  })

const db = () => firebase.database()

/**
 * @param {String} username 
 * @returns {Promise<String>}
 */
const getToken = username => 
  db().ref(`tokens/${username}`).once('value')

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeToken,
  storeSubscription,
  isSubscribed
}