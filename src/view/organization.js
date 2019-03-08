'use strict'

import contentSection from './contentSection'
import menu from './menu'
import githubDAL from '../model/githubDAL'

const renderOrgView = async (userData, allOrgs, org) => {
    const section = contentSection.getClearedContentSection()

    const orgDiv = document.createElement('div')
    orgDiv.innerHTML = '<p>Under construction</p>'
    section.appendChild(orgDiv)

    orgDiv.insertBefore(
        menu.getMenuDiv(userData, allOrgs),
        orgDiv.firstChild
    )

    const orgData = await githubDAL.fetchOrgRepos(org)
    console.log(orgData)
}

export default { renderOrgView }
