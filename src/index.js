'use strict'

import init from './model/init'
import storage from './model/storage'
import auth from './model/auth'

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

// redirects back later, store in firebase auth
const initializeLogin = () => {
  document.getElementById('login-btn')  
    .addEventListener('click', async () => {
      try {
        /*await*/ auth.login()
      } catch (error) {
        
      }
  })
}

const initializeLogout = () => {
  document.getElementById('logout-btn')
    .addEventListener('click', async () => {
      try {
        await auth.logOut()
      } catch (error) {
        
      }

      document.getElementById('status-info')
        .innerText = 'You are now logged out'
    })
}

;(async () => {
  init.initialize()
  initializeLogin()
  initializeLogout()
  greet('Hej världen!')
})()
