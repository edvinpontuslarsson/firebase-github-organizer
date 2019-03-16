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

  repos.forEach(async repo => {
    await appendRepoDiv(orgDiv, repo)
  })

  return orgDiv
}

/**
 * @param {HTMLElement} orgDiv 
 * @param {Object} repo repo data object
 */
const appendRepoDiv = async (orgDiv, repo) => {
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
    Language: ${xss(repo.language)} <br>
    Description: ${xss(repo.description)} <br>
    Created at: ${xss(repo.created_at)}
  `
  repoDiv.appendChild(info)

  await appendReleasesDiv(repoDiv, repo.releases_url)
  await appendIssuesDiv(repoDiv, repo.issues_url)
  await appendCommitsDiv(repoDiv, repo.commits_url)
}

/**
 * @param {HTMLElement} repoDiv 
 * @param {Array} releases 
 */
const appendReleasesDiv = async (repoDiv, releasesURL) => {
  const releasesDiv = document.createElement('div')
  repoDiv.appendChild(releasesDiv)

  const releasesHeader = document.createElement('h3')
  releasesHeader.innerText = 'Releases'
  releasesDiv.appendChild(releasesHeader)

  const releases =
    await githubDAL.fetchFromRepoURL(releasesURL)

  releases.forEach(release => {
    appendOneReleaseDiv(releasesDiv, release)
  })
}

const appendOneReleaseDiv = (releasesDiv, release) => {
  const releaseDiv = document.createElement('div')
  releaseDiv.innerHTML = `
    <h4>${xss(release.name)} ${xss(release.tag_name)}</h4>
    <p>
      Published at: ${xss(release.published_at)} <br>
      ${release.body}
    </p>
  `
  releasesDiv.appendChild(releaseDiv)
}

const appendIssuesDiv = async (repoDiv, issuesURL) => {
  const issuesDiv = document.createElement('div')
  repoDiv.appendChild(issuesDiv)

  const issuesHeader = document.createElement('h3')
  issuesHeader.innerText = 'Issues'
  issuesDiv.appendChild(issuesHeader)

  const issues =
    await githubDAL.fetchFromRepoURL(issuesURL)

  issues.forEach(issue => {
    appendOneIssueDiv(issuesDiv, issue)
  })
}

const appendOneIssueDiv = (issuesDiv, issue) => {
  const issueDiv = document.createElement('div')
  issueDiv.innerHTML = `
    <h4>${xss(issue.title)}</h4>
    <p>
      State: ${xss(issue.state)} ${xss(issue.updated_at)}
      <br> Created by: ${xss(issue.user.login)}
    </p>
    <p>${xss(issue.body)}</p>
  `
  issuesDiv.appendChild(issueDiv)
}

const appendCommitsDiv = async (repoDiv, commitsURL) => {
  // TODO: implement this
}

export default { renderOrgView }

