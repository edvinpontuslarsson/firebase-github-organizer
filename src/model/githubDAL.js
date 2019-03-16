'use strict'

import auth from './auth'
import storage from './storage'

/**
 * @returns {Promise<Array<String>>}
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
    const orgsURL = 'https://api.github.com/user/orgs'

    const orgsRes =
        await window.fetch(orgsURL, getGETReqObj())
    if (!orgsRes.ok) {
      console.log(await orgsRes.json())
      return resolve({}) // empty {}
    }

    const allOrgs = await orgsRes.json()
    const accessibleOrgs = []

    for (let i = 0; i < allOrgs.length; i++) {
      try {
        const orgHooksRes = await fetchHooks(allOrgs[i])

        // ignores organizations without user access to hooks
        if (orgHooksRes.ok) {
          accessibleOrgs.push(allOrgs[i])
        }
      } catch (error) {
        console.error(
          `Could not get ${allOrgs[i].login} hooks: ${error}`
        )
      }
    }

    resolve(accessibleOrgs)
  })

const fetchHooks = org => window.fetch(org.hooks_url, getGETReqObj())

/**  
 * 
 */
const setHooks = async org => {
  
  // TODO: get hooks, if none set

  // do this every time user enters org page

  /////////////////////////////////////////////////////

  // TODO: OBS!!!!!!!!!!!!!!!!!!!!
  
  // also set (if none) when user sets settings to have hooks,

  ////////////////////////////////////////////////

  const serverURL = await storage.getServerURL()

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
      url: serverURL,
      content_type: 'json'
    }
  }

  const hookPost = JSON.stringify(hookPostObj)
}

/**
 * @param {Object} org object
 * @returns {Object} objects, some props:
 * created_at: -,
 * description: -,
 * has_issues: bool,
 * issues_url: -,
 * hooks_url: -,
 * language: programming language,
 * name: name of repo,
 * releases_url: result: [{ tag_name, name, body, published_at }],
 * issues_url: result: [{ state, title, updated_at, body, user.login }],
 * commits_url: result: [{ commit.message, commit.author.name, commit.author.date }],
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
  fetchOrgRepoData,
  fetchFromRepoURL
}
