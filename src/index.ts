'use strict'

import init from './model/init'
import auth from './model/auth'

const greet = (greeting: string) => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

const initializeLogin = () => {
  document.getElementById('login-btn')  
    .addEventListener('click', async () => {
      await auth.login()

      const userData = await auth.getUserData()

      const header = document.getElementById('main-header')
      header.innerText = `Welcome ${userData[0].displayName}!`

      document.getElementById('profile-pic')
        .setAttribute('src', userData[0].photoURL)
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

;(async () => {
  init.initialize()
  initializeLogin()
  initializeLogout()
  greet('Hej världen!')
})()
