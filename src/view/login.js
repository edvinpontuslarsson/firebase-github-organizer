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
  // hides loginBtn & sets load spinner
  loginBtn.setAttribute('class', 'hidden')
  const spinnerDiv = renderAndGetSpinnerDiv()
  section.appendChild(spinnerDiv)

  await auth.login()
  await messaging.initialize()

  const userData = await auth.getUserData()
  const orgs = await githubDAL.fetchOrgs()

  spinnerDiv.setAttribute('class', 'hidden')

  home.renderHomeView(userData, orgs)
}

const renderAndGetSpinnerDiv = () => {
  const spinnerDiv = document.createElement('div')
  spinnerDiv.innerHTML = 
  `
    <p>Fetching data, please wait</p>
    <div class="spinner"></div>
  `
  return spinnerDiv
}

export default { renderLoginView }
