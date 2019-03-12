'use strict'

import firebase from 'firebase/app'
import 'firebase/database'
import cryptoRandomString from 'crypto-random-string'

/** TODO: REDO
 * Stores token with GitHub secret
 * Replaces any exsting token
 */
const storeTokenWithSecret = token => {
  const secret = cryptoRandomString(10)
  db().ref(`tokens/${secret}`).set({ token })
}

const notifyToReleases = (username, token, org) => {
  
}

const notifyToIssues = (username, token, org) => {

}

const notifyToCommits = (username, token, org) => {

}

const isNotifiedToReleases = (username, org) => {

}

const isNotifiedToIssues = (username, org) => {

}

const isNotifiedToCommits = (username, org) => {

}

const db = () => firebase.database()

// TODO: continue here: https://firebase.google.com/docs/database/web/read-and-write
// I have now implemented "Basic write operations"

export default {
  storeTokenWithSecret,
  notifyToReleases,
  notifyToIssues,
  notifyToCommits,
  isNotifiedToReleases,
  isNotifiedToIssues,
  isNotifiedToCommits
}

