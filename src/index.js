'use strict'

import init from './model/init'
import auth from './model/auth'
import Router from 'vanilla-router'

var router = new Router({
  mode: 'history',
  page404: resource => {
      console.log('"/' + resource + '" Page not found');
  }
})

router.add('', function () {
  console.log('Home page')
})

router.add('hello/(:any)', resource => {
  console.log('Hello, ' + resource)
})

router.add('about', () => {
  console.log('About Page')
})

router.addUriListener()

// when user clicks link, prevent default & below
router.navigateTo('hello/World')

const greet = greeting => {
  const header = document.getElementById('main-header')
  header.innerText = greeting
}

const initializeGetGithubData = () => {
  document.getElementById('get-gh-data')
    .addEventListener('click', async () => {
      const username = auth.getUsername()
      const token = auth.getAccessToken()

      const url = 'https://api.github.com/user/orgs'

      const response = await window.fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${token}`
          }
        })
      
      console.log(await response.json())
    })
}

const initializeLogin = () => {
  document.getElementById('login-btn')  
    .addEventListener('click', async () => {
      await auth.login()

      const userData = await auth.getUserData()

      // TODO: return [0] from auth, have interface for userData

      const header = document.getElementById('main-header')
      header.innerText = `Welcome ${userData[0].displayName}!`

      document.getElementById('profile-pic')
        .setAttribute('src', userData[0].photoURL)

      initializeGetGithubData()
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