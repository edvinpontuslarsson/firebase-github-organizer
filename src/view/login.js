'use strict'

import auth from '../model/auth'
import messaging from '../model/messaging'
import githubDAL from '../model/githubDAL'
import home from './home'
import contentSection from './contentSection'

const renderLoginView = () => {
  const section = contentSection.getClearedContentSection()

  const loginBtn = document.createElement('button')
  loginBtn.setAttribute('id', 'login-btn')
  loginBtn.innerText = 'Log in'
  loginBtn.addEventListener('click', login)

  const loginDiv = document.createElement('div')
  loginDiv.appendChild(loginBtn)

  section.appendChild(loginDiv)
}

const login = async () => {
  await auth.login()
  await messaging.initialize()

  const userData = await auth.getUserData()
  const orgs = await githubDAL.fetchOrgs()

  home.renderHomeView(userData, orgs)
}

export default { renderLoginView }
