'use strict'

import xss from 'xss'
import contentSection from './contentSection'
import menu from './menu'

const renderHomeView = (userData, orgs) => {
    const section = contentSection.getClearedContentSection()
    
    const homeDiv = document.createElement('div')
    homeDiv.innerHTML = getHomeView(userData, orgs)
    section.appendChild(homeDiv)

    homeDiv.insertBefore(
        menu.getMenuDiv(userData, orgs),
        homeDiv.firstChild
    )

    appendOrgs(orgs)
}

const getHomeView = userData => 
    `
    <h1>Welcome ${xss(userData.displayName)}!</h1>
    <img src="${userData.photoURL}" alt="Profile picture" id="profile-pic">
    <h2>Your organisations:</h2>
    <div id="orgs-div"></div>
    `

const appendOrgs = allOrgs => {
    const orgsDiv = document.getElementById('orgs-div')

    allOrgs.forEach(org => {
        const orgDiv = document.createElement('div')
        orgDiv.setAttribute('class', 'org-div')

        const avatar = document.createElement('img')
        avatar.setAttribute('src', org.avatar_url)
        avatar.setAttribute('alt', `${org.login} avatar`)
        avatar.setAttribute('class', 'org-avatar')

        const header = document.createElement('h3')
        header.setAttribute('class', 'org-header')
        const link = document.createElement('a')
        link.innerText = org.login
        link.setAttribute('href', org.url) // later getAttribute

        header.appendChild(link)

        link.addEventListener('click', event => {
            event.preventDefault()
            console.log(event)
            renderOrgView(allOrgs, org)
        })

        const description = document.createElement('p')
        description.innerText = org.description
        description.setAttribute('class', 'org-description')

        orgDiv.appendChild(avatar)
        orgDiv.appendChild(header)
        orgDiv.appendChild(description)

        orgsDiv.appendChild(orgDiv)
    })
}

const renderOrgView = async (allOrgs, org) => {
    // TODO: render view for org
}

export default {
    renderHomeView
}
