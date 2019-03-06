'use strict'

import init from './model/init'
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
    .addEventListener('click', async () => {
      await auth.logOut()

      document.getElementById('status-info')
        .innerText = 'You are now logged out'
    })
}

const initializeTokenDisplay = () => {
  document.getElementById('display-token')
    .addEventListener('click', async () => {
      const token = await auth.getTokenPromise()

      console.log(token)

      document.getElementById('acess-token')
        .innerText = token
    })
}

;(async () => {
  init.initialize()
  const isLoggedIn: boolean = await auth.isLoggedIn()
  console.log('is logged in? ' + isLoggedIn)
  initializeLogin()
  initializeLogout()
  initializeTokenDisplay()
  greet('Hej världen!')
})()
