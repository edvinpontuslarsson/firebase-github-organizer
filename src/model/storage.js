'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import messaging from './messaging'
import cryptoRandomString from 'crypto-random-string' // maybe for 1 GH secret

// TODO: test if this works as expected

const storeSubscription = async (orgName, eventType) => {
  const token = await messaging.getToken()
  db().ref(`organizations/${orgName}/subscriptions/${eventType}`)
    .set({ token })
}

const isSubscribed = (orgName, eventType) =>
  new Promise(async resolve => {
    const token = await messaging.getToken()
    const exists = db().ref(`organizations/${orgName}/subscriptions/${eventType}`)
      .orderByChild('token').equalTo(token).once('value')
    resolve(exists)
  })

const db = () => firebase.database()

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeSubscription,
  isSubscribed
}

