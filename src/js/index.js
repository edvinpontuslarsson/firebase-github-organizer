'use strict'

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

;(() => {
  greet('你好世界')
})()
