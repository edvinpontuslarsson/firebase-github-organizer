'use strict'

const init = require('./init/init')

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

;(() => {
  init()
  greet('Bonjour le Monde!')
})()
