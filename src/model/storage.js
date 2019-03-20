'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import auth from './auth'

/**
 * Overwrites any existing token for user
 */
const storeToken = token => {
  const username = auth.getUsername()
  db().ref(`tokens/${username}`).set({ token })
}

const getServerURL = () => new Promise(resolve => {
  db().ref('server_url').once('value', snapshot => {
    resolve(snapshot.val())
  })
})

const storeSubscription = async (orgName, eventType) => {
  const username = auth.getUsername()

  db().ref(
    `organizations/${orgName}/subscriptions/${eventType}/${username}`
  ).set({ username })
}

const removeSubscription = (orgName, eventType) => {
  const username = auth.getUsername()

  db().ref(
    `organizations/${orgName}/subscriptions/${eventType}/${username}/username`
  ).remove()
}

/**
 * @returns {Promise<boolean>}
 */
const isSubscribed = (orgName, eventType) =>
  new Promise(async resolve => {
    const username = auth.getUsername()

    db().ref(
      `organizations/${orgName}/subscriptions/${eventType}/${username}/username`
    ).once('value', snapshot => {
      resolve(snapshot.val() === username)
    })
  })

/**
 * @returns {Promise<boolean>}
 */
const isHooked = orgName => new Promise(resolve => {
  db().ref(
    `organizations/${orgName}/hooks`
  ).once('value', snapshot => {
    resolve(snapshot.exists())
  })
})

const getOrgUpdatesRef = () =>
  db().ref().child(`organizations/updates`)

const db = () => firebase.database()

export default {
  getServerURL,
  storeToken,
  storeSubscription,
  removeSubscription,
  isSubscribed,
  isHooked,
  getOrgUpdatesRef
}
