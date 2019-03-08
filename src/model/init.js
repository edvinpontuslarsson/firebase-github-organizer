'use strict'

import firebaseApp from 'firebase/app'

/**
 * Firebase config
 */
const initialize = () =>
  firebaseApp.initializeApp({
    apiKey: 'AIzaSyBDrSwWXn2AklmSJtlGTJ37jpUXorwyv1c',
    authDomain: 'gitedvinhub.firebaseapp.com',
    databaseURL: 'https://gitedvinhub.firebaseio.com',
    projectId: 'gitedvinhub',
    storageBucket: 'gitedvinhub.appspot.com',
    messagingSenderId: '821443809987'
  })

export default { initialize }
