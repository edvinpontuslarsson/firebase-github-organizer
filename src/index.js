'use strict'

import init from './model/init'
import auth from './model/auth'
import githubDAL from './model/githubDAL'

/*
const initializeGetGithubData = () => {
  document.getElementById('get-gh-data')
    .addEventListener('click', async () => {
      
    })
}
*/
const initializeLogin = () => {
  document.getElementById('login-btn')  
    .addEventListener('click', async () => {
      await auth.login()

      const userData = await auth.getUserData()
      const ghData = await githubDAL.getData()
  })
}
/*
const initializeLogout = () => {
  document.getElementById('logout-btn')
    .addEventListener('click', async () => {
      await auth.logOut()

      document.getElementById('status-info')
        .innerText = 'You are now logged out'
    })
}
*/
;(async () => {
  init.initialize()
  initializeLogin()
  // initializeLogout()
})()
