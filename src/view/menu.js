'use strict'

import login from './login'
import home from './home'
import settings from './settings'
import auth from '../model/auth'

const getMenuDiv = (userData, orgs) => {
  const logOutBtn = document.createElement('button')
  logOutBtn.innerText = 'Log out'
  logOutBtn.addEventListener('click', logOut)

  const homeBtn = document.createElement('button')
  homeBtn.innerText = 'Home'
  homeBtn.addEventListener('click', () => {
    home.renderHomeView(userData, orgs)
  })

  const settingsBtn = document.createElement('button')
  settingsBtn.innerText = 'Settings'
  settingsBtn.addEventListener('click', () => {
    settings.renderSettingsView(userData, orgs)
  })

  const div = document.createElement('div')
  div.setAttribute('id', 'menu')
  div.appendChild(logOutBtn)
  div.appendChild(homeBtn)
  div.appendChild(settingsBtn)

  return div
}

const logOut = async () => {
  await auth.logOut()
  login.renderLoginView()
}

export default { getMenuDiv }
