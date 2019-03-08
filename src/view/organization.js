'use strict'

import contentSection from './contentSection'
import menu from './menu'
import githubDAL from '../model/githubDAL'

const renderOrgView = async (userData, allOrgs, org) => {
  const section = contentSection.getClearedContentSection()

  const repos = await githubDAL.fetchOrgRepoData(org)

  console.log(repos)

  const orgDiv = getOrgDiv(userData, allOrgs, org, repos)
  section.appendChild(orgDiv)

  orgDiv.insertBefore(
    menu.getMenuDiv(userData, allOrgs),
    orgDiv.firstChild
  )
}

const getOrgDiv = (userData, allOrgs, org, repos) => {
  const orgDiv = document.createElement('div')

  return orgDiv
}

export default { renderOrgView }
