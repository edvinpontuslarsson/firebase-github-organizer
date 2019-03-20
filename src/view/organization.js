'use strict'

import contentSection from './contentSection'
import menu from './menu'
import githubDAL from '../model/githubDAL'
import storage from '../model/storage'
import xss from 'xss'

const renderOrgView = async (userData, allOrgs, org) => {
  const section = contentSection.getClearedContentSection()

  const repos = await githubDAL.fetchOrgRepoData(org)

  const orgDiv = appendAndGetOrgDiv(section, repos)
  orgDiv.setAttribute('id', `org-view-${org.login}-div`)

  orgDiv.insertBefore(
    menu.getMenuDiv(userData, allOrgs),
    orgDiv.firstChild
  )

  githubDAL.setHooks(org)

  listenForUpdates(org, orgDiv)
}

/**
 * @param {*} org - organization data object
 * @param {HTMLElement} orgDiv 
 */
const listenForUpdates = (org, orgDiv) => {
  const repoOrgUpdatesRef = 
    storage.getOrgUpdatesRef(org.login, 'repository')
  const issuesOrgUpdatesRef =
    storage.getOrgUpdatesRef(org.login, 'issues')
  const pushOrgUpdatesRef =
    storage.getOrgUpdatesRef(org.login, 'push')
  const releaseOrgUpdatesRef =
    storage.getOrgUpdatesRef(org.login, 'release')

  repoOrgUpdatesRef.on('value', snapshot => {
    console.log('gets here?')
    if (isOrgPageUpdateReady(snapshot, org)) {
      console.log(snapshot.val())
      const payload = snapshot.val()
      if (payload.action === 'created') {
        appendRepoDiv(
          orgDiv, payload.repository
        )
      }
    }
  })
}

const isOrgPageUpdateReady = (snapshot, org) =>
  snapshot.exists() &&
  document.getElementById(`org-view-${org.login}-div`)

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
  repoDiv.classList.add('repo-div')
  orgDiv.appendChild(repoDiv)

  const infoDiv = document.createElement('div')
  infoDiv.classList.add('info-div')

  const repoHeader = document.createElement('h2')
  const repoURL =
    repo.url.replace('api.', '').replace('/repos', '')
  repoHeader.innerHTML =
      `<a href="${repoURL}" target="_blank">${xss(repo.name)}</a>`
  infoDiv.appendChild(repoHeader)

  const info = document.createElement('p')
  info.innerHTML = `
    Language: ${xss(repo.language) || ''} <br>
    Description: ${xss(repo.description || '')} <br>
    Created at: ${xss(repo.created_at)}
  `
  infoDiv.appendChild(info)

  repoDiv.appendChild(infoDiv)

  const eventsDiv = document.createElement('div')
  eventsDiv.classList.add('events-div')
  repoDiv.appendChild(eventsDiv)

  await appendReleasesDiv(eventsDiv, repo.releases_url)
  await appendIssuesDiv(eventsDiv, repo.issues_url)
  await appendCommitsDiv(eventsDiv, repo.commits_url)
}

/**
 * @param {HTMLElement} repoDiv
 * @param {Array} releases
 */
const appendReleasesDiv = async (repoDiv, releasesURL) => {
  const releasesDiv = document.createElement('div')
  releasesDiv.classList.add('releases-div')
  repoDiv.appendChild(releasesDiv)

  const releasesHeader = document.createElement('h3')
  releasesHeader.innerText = 'Releases'
  releasesDiv.appendChild(releasesHeader)

  const releases =
    await githubDAL.fetchFromRepoURL(releasesURL)

  releases.forEach(release => {
    releasesDiv.appendChild(
      getOneReleaseDiv(release)
    )
  })
}

const getOneReleaseDiv = release => {
  const releaseDiv = document.createElement('div')
  releaseDiv.classList.add('one-release-div')
  releaseDiv.innerHTML = `
    <b>${xss(release.tag_name)} ${xss(release.name)}</b>
    <p>
      ${release.body} <br>
      ${xss(release.published_at)}
    </p>
  `
  return releaseDiv
}

const appendIssuesDiv = async (repoDiv, issuesURL) => {
  const issuesDiv = document.createElement('div')
  issuesDiv.classList.add('issues-div')
  repoDiv.appendChild(issuesDiv)

  const issuesHeader = document.createElement('h3')
  issuesHeader.innerText = 'Issues'
  issuesDiv.appendChild(issuesHeader)

  const issues =
    await githubDAL.fetchFromRepoURL(issuesURL)

  issues.forEach(issue => {
    issuesDiv.appendChild(
      getOneIssueDiv(issue)
    )
  })
}

const getOneIssueDiv = issue => {
  const issueDiv = document.createElement('div')
  issueDiv.classList.add('one-issue-div')
  issueDiv.innerHTML = `
    <b>${xss(issue.title)}</b>
    <p>
      State: ${xss(issue.state)}
      <br> Created by: ${xss(issue.user.login)}
      <br> ${xss(issue.updated_at)}
    </p>
    <p>${xss(issue.body)}</p>
  `
  return issueDiv
}

const appendCommitsDiv = async (repoDiv, commitsURL) => {
  const commitsDiv = document.createElement('div')
  commitsDiv.classList.add('commits-div')
  repoDiv.appendChild(commitsDiv)

  const commitsHeader = document.createElement('h3')
  commitsHeader.innerText = 'Commits'
  commitsDiv.appendChild(commitsHeader)

  const commits =
    await githubDAL.fetchFromRepoURL(commitsURL)

  commits.forEach(commit => {
    commitsDiv.appendChild(
      getOneCommitDiv(commit)
    )
  })
}

const getOneCommitDiv = commit => {
  const commitDiv = document.createElement('div')
  commitDiv.classList.add('one-commit-div')
  commitDiv.innerHTML = `
    <b>${xss(commit.commit.message)}</b><br>
    By ${xss(commit.commit.author.name)} 
    <br> ${xss(commit.commit.author.date)}
  `
  return commitDiv
}

export default { renderOrgView }
