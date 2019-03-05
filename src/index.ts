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
    .addEventListener('click', async () => {
      await auth.login()
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
  const isLoggedIn: boolean = await auth.isLoggedIn()
  console.log(isLoggedIn)
  initializeLogin()
  initializeLogout()
  
  if (isLoggedIn) console.log(
    auth.getUserData().providerData
  )

  greet('Hej världen!')
})()
