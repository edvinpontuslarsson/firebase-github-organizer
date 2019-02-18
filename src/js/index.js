'use strict'

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

;(() => {
  greet('Bonjour le Monde!')
})()
