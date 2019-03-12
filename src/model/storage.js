'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import cryptoRandomString from 'crypto-random-string' // maybe for 1 GH secret

// TODO: test if this works as expected

const storeSubscription = (orgName, eventType) => {
  const token = 'testing-token' // TODO: get token from messaging
  db().ref(`organizations/${orgName}/subscriptions/${eventType}`)
    .set({ token })
}

const isSubscribed = (orgName, eventType) => {
  
}

const db = () => firebase.database()

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeSubscription,
  isSubscribed
}

