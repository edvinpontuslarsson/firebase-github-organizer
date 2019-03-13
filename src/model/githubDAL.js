'use strict'

import auth from './auth'

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
  new Promise(async (resolve, reject) => {
    /*
    const orgsURL = 'https://api.github.com/user/orgs'

    const orgsRes =
        await window.fetch(orgsURL, getGETReqObj())
    if (!orgsRes.ok) {
      console.log(await orgsRes.json())
      return resolve({}) // empty {}
    }

    resolve(orgsRes.json())
    */

    // test data for now: save test data for later
    resolve(
      [
        {
          avatar_url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
          description: 'test',
          hooks_url: 'test',
          issues_url: 'test',
          login: 'test',
          members_url: 'test',
          repos_url: 'test',
          url: 'test'
        },
        {
          avatar_url: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          description: 'test2',
          hooks_url: 'test2',
          issues_url: 'test2',
          login: 'test2',
          members_url: 'test2',
          repos_url: 'test2',
          url: 'test2'
        }
      ]
    )
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
  new Promise(async (resolve, reject) => {
    const reposRes =
        await window.fetch(org.repos_url, {
          method: 'GET',
          headers: getAuthHeaders()
        })
    if (!reposRes.ok) {
      console.log(await reposRes.json())
      return resolve({}) // empty {}
    }

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
  fetchOrgs,
  fetchOrgRepoData
}
