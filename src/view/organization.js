'use strict'

import contentSection from './contentSection'
import menu from './menu'
import githubDAL from '../model/githubDAL'
import messaging from '../model/messaging'
import xss from 'xss'

const renderOrgView = async (userData, allOrgs, org) => {
  const section = contentSection.getClearedContentSection()

  const repos = await githubDAL.fetchOrgRepoData(org)

  console.log(repos)

  const orgDiv = appendAndGetOrgDiv(section, repos)
  orgDiv.setAttribute('id', `org-view-${org.login}-div`)

  orgDiv.insertBefore(
    menu.getMenuDiv(userData, allOrgs),
    orgDiv.firstChild
  )

  // TODO: set hooks here
  
  const firebaseMessaging = messaging.getFirebaseMessaging()
  firebaseMessaging.onMessage(payload => {
    if (payload.data.org_name === org.login &&
        document.getElementById(`org-view-${org.login}-div`)) {
      renderOrgView(userData, allOrgs, org)
    }
  })
}

const appendAndGetOrgDiv = (section, repos) => {
  const orgDiv = document.createElement('div')
  section.appendChild(orgDiv)

  repos.forEach(repo => {
    appendRepoDiv(orgDiv, repo)
  })

  return orgDiv
}

/**
 * @param {HTMLElement} orgDiv 
 * @param {Object} repo repo data object
 */
const appendRepoDiv = (orgDiv, repo) => {
  const repoDiv = document.createElement('div')
  orgDiv.appendChild(repoDiv)

  const repoHeader = document.createElement('h2')
  const repoURL = 
    repo.url.replace('api.', '').replace('/repos', '')
  repoHeader.innerHTML = 
      `<a href="${repoURL}">${xss(repo.name)}</a>`
  repoDiv.appendChild(repoHeader)

  const info = document.createElement('p')
  info.innerHTML = `
    Language: ${xss(repo.language)} License: ${xss(repo.license.name)} <br>
    Description: ${xss(repo.description)} <br>
    Created at: ${xss(repo.created_at)}
  `
  repoDiv.appendChild(info)

  appendReleasesDiv(repoDiv, repo.fetched_issues)
  appendIssuesDiv(repoDiv, repo.fetched_issues)
  appendCommitsDiv(repoDiv, repo.fetched_issues)
}

/**
 * @param {HTMLElement} repoDiv 
 * @param {Array} releases 
 */
const appendReleasesDiv = (repoDiv, releases) => {
  // TODO: implement this
}

const appendIssuesDiv = (repoDiv, issues) => {
  const issuesDiv = document.createElement('div')
  repoDiv.appendChild(issuesDiv)


}

const appendOneIssueDiv = (issuesDiv, issue) => {

}

const appendCommitsDiv = (repoDiv, releases) => {
  // TODO: implement this
}

export default { renderOrgView }

