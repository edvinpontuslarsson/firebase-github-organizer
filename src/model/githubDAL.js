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

      const orgsRes = await window.fetch(orgsURL, {
          method: 'GET',
          headers: getAuthHeaders()
        })

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
const fetchOrgRepos = org =>
    new Promise(async resolve => {
      const orgRes = await window.fetch(org.repos_url, {
        method: 'GET',
        headers: getAuthHeaders()
      })
      resolve(orgRes.json())
    })

const getAuthHeaders = () => {
  const token = auth.getAccessToken()
  return {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${token}`
  }
}

export default {
  fetchOrgs,
  fetchOrgRepos
}
