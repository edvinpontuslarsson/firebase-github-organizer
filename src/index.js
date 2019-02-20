'use strict'

import init from './init/init'
import storage from './storage/storage'
import auth from './auth/auth'

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

const activateLoginBtn = () => {
  const btn = document.getElementById('login-btn')
  btn.addEventListener('click', () => { auth() })
}

;(() => {
  const app = init()
  storage(app) // TODO: handle storage
  activateLoginBtn()
  greet('Hej världen!')
})()
