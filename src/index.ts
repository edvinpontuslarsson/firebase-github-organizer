'use strict'

import init from './model/init'
import storage from './model/storage'
import auth from './model/auth'

const greet = (greeting: string) => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

// redirects back later, store in firebase auth
const initializeLogin = () => {
  document.getElementById('login-btn')  
    .addEventListener('click', () => {
      auth.login()
  })
}

const initializeLogout = () => {
  document.getElementById('logout-btn')
    .addEventListener('click', () => {
      auth.logOut()

      document.getElementById('status-info')
        .innerText = 'You are now logged out'
    })
}

;(() => {
  init.initialize()
  initializeLogin()
  initializeLogout()
  greet('Hej världen!')
})()
