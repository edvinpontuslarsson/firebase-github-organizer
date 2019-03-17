'use strict'

import contentSection from './contentSection'
import menu from './menu'
import storage from '../model/storage'
import githubDAL from '../model/githubDAL'

const renderSettingsView = (userData, orgs) => {
  const section = contentSection.getClearedContentSection()

  const settingsDiv = document.createElement('div')
  settingsDiv.appendChild(menu.getMenuDiv(userData, orgs))
  settingsDiv.appendChild(getHeader('h1', 'Notification Settings'))

  appendOrgSettings(userData, orgs, settingsDiv)

  section.appendChild(settingsDiv)
}

const getHeader = (type, innerText) => {
  const header = document.createElement(type)
  header.innerText = innerText
  return header
}

const appendOrgSettings = (userData, organizations, settingsDiv) => {
  organizations.forEach(async org => {
    const orgDiv = document.createElement('div')
    orgDiv.appendChild(getHeader('h3', org.login))

    const repositorySubExists =
            await storage.isSubscribed(org.login, 'repository')
    const releaseSubExists =
            await storage.isSubscribed(org.login, 'release')
    const issuesSubExists =
            await storage.isSubscribed(org.login, 'issues')
    const pushSubExists =
            await storage.isSubscribed(org.login, 'push')

    orgDiv.appendChild(getNotificationSetting(
      userData, organizations, org, 'repository', repositorySubExists
    )
    )
    orgDiv.appendChild(getNotificationSetting(
      userData, organizations, org, 'release', releaseSubExists
    )
    )
    orgDiv.appendChild(getNotificationSetting(
      userData, organizations, org, 'issues', issuesSubExists
    )
    )
    orgDiv.appendChild(getNotificationSetting(
      userData, organizations, org, 'push', pushSubExists
    )
    )

    settingsDiv.appendChild(orgDiv)
  })
}

/**
 * @param {Object} org
 * @param {String} eventType repository/release/issues/push
 * @param {boolean} isNotification
 */
const getNotificationSetting = (userData, allorgs, org, eventType, isNotification) => {
  const symbolClass = isNotification ? 'stop' : 'add'
  const symbol = isNotification ? 'x' : '+'

  const link = document.createElement('a')
  link.innerHTML =
        `<a href="/${org.login}-${eventType}"> ${symbolClass} notifications</a>`

  link.addEventListener('click', event => {
    event.preventDefault()
    changeSubscriptionSetting(userData, allorgs, org, eventType, isNotification)
  })

  const settingElement = document.createElement('p')
  settingElement.setAttribute('id', `${org.login}-${eventType}`)
  settingElement.innerHTML =
        `${eventType}: <b class="${symbolClass}">${symbol}</b>`
  settingElement.appendChild(link)

  return settingElement
}

/**
 * Sets notification if none, removes if set
 * @param {Object} org
 * @param {String} eventType repository/release/issues/push
 * @param {boolean} isNotification
 */
const changeSubscriptionSetting = async (userData, allorgs, org, eventType, isNotification) => {
  if (isNotification) {
    await storage.removeSubscription(org.login, eventType)
  } else {
    await storage.storeSubscription(org.login, eventType)
    githubDAL.setHooks(org)
  }

  // re-renders page
  renderSettingsView(userData, allorgs)
}

export default { renderSettingsView }
