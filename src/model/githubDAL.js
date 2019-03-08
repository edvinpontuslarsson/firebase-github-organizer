'use strict'

import auth from './auth'

/**
 * @returns {Array}
 * Objects, some properties:
    avatar_url: org avatar,
    description: -,
    hooks_url: -,
    issues_url: -,
    login: title of org,
    members_url: -,
    repos_url: -,
    url: url to this org
 */
const fetchOrgs = () =>
  new Promise(async resolve => {
    const orgsURL = 'https://api.github.com/user/orgs'

    const orgsRes =
        await window.fetch(orgsURL, getGETReqObj())

    resolve(orgsRes.json())
  })

/**
 * @param {Object} org object
 * @returns {Object} objects, some props:
 * collaborators_url: -,
 * commits_url: -,
 * contributors_url: -,
 * created_at: -,
 * description: -,
 * has_issues: bool,
 * issues_url: -,
 * hooks_url: -,
 * language: programming language,
 * license: { name: - }
 * name: name of repo,
 * open_issues_count: int
 * private: bool,
 * updated_at: Date,
 * releases_url: -
 * url: url to this repo
 */
const fetchOrgRepoData = org =>
  new Promise(async resolve => {
    const reposRes =
        await window.fetch(org.repos_url, {
          method: 'GET',
          headers: getAuthHeaders()
        })

    const repoArr = await reposRes.json()

    repoArr.forEach(async repo => {
      const releases = 
          await window.fetch(repo.releases_url, getGETReqObj())
      repo.fetched_releases = await releases.json()

      const issues = 
          await window.fetch(repo.issues_url, getGETReqObj())
      repo.fetched_issues = await issues.json()

      const commits =
          await window.fetch(repo.commits_url, getGETReqObj())
      repo.fetched_commits = await commits.json()
    }) 

    resolve(repoArr)
  })

const getGETReqObj = () => {
  return {
    method: 'GET',
    headers: getAuthHeaders()
  }
}

const getAuthHeaders = () => {
  const token = auth.getAccessToken()
  return {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${token}`
  }
}

export default {
  fetchOrgs,
  fetchOrgRepoData
}
