'use strict'

import init from './model/init'
import storage from './model/storage'
import auth from './model/auth'

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

const initializeLogin = () => {
  document.getElementById('login-btn')  
    .addEventListener('click', async () => {
      await auth.login()

      document.getElementById('status-info')
        .innerText = 'You are now logged in'
      
      initializeLogout()
  })
}

const initializeLogout = () => {
  document.getElementById('logout-btn')
    .addEventListener('click', async () => {
      await auth.logOut()

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
