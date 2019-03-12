'use strict'

import contentSection from './contentSection'
import menu from './menu'

const renderSettingsView = (userData, orgs) => {
    const section = contentSection.getClearedContentSection()

    const settingsDiv = document.createElement('div')
    settingsDiv.appendChild(menu.getMenuDiv(userData, orgs))
    settingsDiv.appendChild(getHeader('h1', 'Notification Settings'))

    appendOrgSettings(orgs, settingsDiv)

    section.appendChild(settingsDiv)
}

const getHeader = (type, innerText) => {
    const header = document.createElement(type)
    header.innerText = innerText
    return header
}

const appendOrgSettings = (organizations, settingsDiv) => {
    organizations.forEach(org => {
        const orgDiv = document.createElement('div')
        orgDiv.appendChild(getHeader('h3', org.login))

        // TODO: check in db if notification or not, for now, just false
        
        orgDiv.appendChild(
            getNotificationSetting(org, 'Releases', false)
        )
        orgDiv.appendChild(
            getNotificationSetting(org, 'Issues', false)
        )
        orgDiv.appendChild(
            getNotificationSetting(org, 'Commits', false)
        )

        settingsDiv.appendChild(orgDiv)
    })
}

/**
 * @param {Object} org
 * @param {String} eventType Releases/Issues/Commits
 * @param {boolean} isNotification 
 */
const getNotificationSetting = (org, eventType, isNotification) => {
    const symbolClass = isNotification ? 'stop' : 'add'
    const symbol = isNotification ? 'x' : '+'
        
    const link = document.createElement('a')
    link.innerHTML = `<a href="/${org.login}-${eventType}" 
        id="${org.login}-${eventType}"> ${symbolClass} notifications</a>`

    link.addEventListener('click', event => {
        event.preventDefault()
        changeSubscriptionSetting(org, eventType, isNotification)
    })

    const settingElement = document.createElement('p')
    settingElement.innerHTML = 
        `${eventType}: <b class="${symbolClass}">${symbol}</b>`
    settingElement.appendChild(link)

    return settingElement
}

/**
 * Sets notification if none, removes if set
 * @param {Object} org
 * @param {String} eventType Releases/Issues/Commits
 * @param {boolean} isNotification 
 */
const changeSubscriptionSetting = (org, eventType, isNotification) => {
    // get username here
}

export default { renderSettingsView }

