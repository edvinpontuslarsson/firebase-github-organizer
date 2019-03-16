'use strict'

import contentSection from './contentSection'
import menu from './menu'
import githubDAL from '../model/githubDAL'
import messaging from '../model/messaging'

const renderOrgView = async (userData, allOrgs, org) => {
  const section = contentSection.getClearedContentSection()

  const repos = await githubDAL.fetchOrgRepoData(org)

  console.log(repos)

  const orgDiv = getOrgDiv(userData, allOrgs, org, repos)
  orgDiv.setAttribute('id', `org-view-${org.login}-div`)
  section.appendChild(orgDiv)

  orgDiv.insertBefore(
    menu.getMenuDiv(userData, allOrgs),
    orgDiv.firstChild
  )
  
  const firebaseMessaging = messaging.getFirebaseMessaging()
  firebaseMessaging.onMessage(payload => {
    if (payload.data.org_name === org.login &&
        document.getElementById(`org-view-${org.login}-div`)) {
      renderOrgView(userData, allOrgs, org)
    }
  })
}

const getOrgDiv = (userData, allOrgs, org, repos) => {
  const orgDiv = document.createElement('div')

  return orgDiv
}

export default { renderOrgView }
