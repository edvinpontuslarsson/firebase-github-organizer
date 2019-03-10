'use strict'

import auth from './auth'

const activate = async () => {
  /**
   * Call from index,
   * listen to firebase for hooks
   */
}

// Event types for hooks:
// https://developer.github.com/v3/activity/events/types/

/**
 * Trigger in fetchOrgRepoData
 * Hooks for org:
 * RepositoryEvent: repo CRUD events,
 * 
 * Hooks for each repo:
 * ReleaseEvent: -,
 * IssuesEvent: issue CRUD events,
 * PushEvent: for commits
 */
const setHooks = async () => {
  const hostURL = 'https://gitedvinhub.firebaseapp.com/'

  const hookPostObj = {
    name: 'web',
    active: 'true',
    events: [
      'repository',
      'release',
      'issues',
      'push'
    ],
    config: {
      url: hostURL,
      content_type: 'json'
    }
  }

  const hookPost = JSON.stringify(hookPostObj)
}

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
      repo.fetched_releases = await fetchFromRepoURL(repo.releases_url)
      repo.fetched_issues = await fetchFromRepoURL(repo.issues_url)
      repo.fetched_commits = await fetchFromRepoURL(repo.commits_url)
    }) 

    resolve(repoArr)
  })

/**
 * @param {String} repoURL url from github res obj
 * @returns {Array}
 */
const fetchFromRepoURL = repoURL =>
  new Promise(async resolve => {
    const url = repoURL.split('{')[0]
    const res = await window.fetch(url, getGETReqObj())
    if (!res.ok) return resolve([]) // empty []
    resolve(res.json())
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
  activate,
  fetchOrgs,
  fetchOrgRepoData
}
