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
  loginBtn.addEventListener('click', () => {
    login(loginBtn, section)
  })

  const loginDiv = document.createElement('div')
  loginDiv.appendChild(loginBtn)

  section.appendChild(loginDiv)
}

/**
 * @param {HTMLElement} loginBtn 
 * @param {HTMLElement} section - content section
 */
const login = async (loginBtn, section) => {
  loginBtn.setAttribute('class', 'hidden')

  await auth.login()
  await messaging.initialize()

  // load spinner while waiting
  const spinnerDiv = renderAndGetSpinnerDiv()
  section.appendChild(spinnerDiv)

  const userData = await auth.getUserData()
  const orgs = await githubDAL.fetchOrgs()

  section.removeChild(spinnerDiv)

  home.renderHomeView(userData, orgs)
}

const renderAndGetSpinnerDiv = () => {
  const spinnerDiv = document.createElement('div')
  spinnerDiv.innerHTML = 
  `
    <p id="spinner-info">Fetching GitHub data, please wait...</p>
    <div class="spinner"></div>
  `
  return spinnerDiv
}

export default { renderLoginView }
