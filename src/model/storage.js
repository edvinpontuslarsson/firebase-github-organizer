'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import auth from './auth'

const storeToken = token => {
  const username = auth.getUsername()
  db().ref(`tokens/${username}`).set({ token })
}

/**
 * @returns {Promise<String>}
 */
const getServerURL = () => new Promise(resolve => {
  db().ref('server_url').once('value', snapshot => {
    resolve(snapshot.val())
  })
})

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

    db().ref(
      `organizations/${orgName}/subscriptions/${eventType}/${username}/token`
    ).once('value', snapshot => {
      resolve(snapshot.val() === token)
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
  getServerURL,
  storeToken,
  storeSubscription,
  isSubscribed
}