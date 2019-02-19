'use strict'

import init from './init/init'
import storage from './storage/storage'

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

;(() => {
  const app = init()
  storage(app)
  greet('Hej världen!')
})()
