'use strict'

import auth from './auth'

/**
 * @returns {Array}
 * Objects with these properties:
    avatar_url: org avatar,
    description: -,
    events_url: -,
    hooks_url: -,
    id: -,
    issues_url: -,
    login: title of org,
    members_url: -,
    node_id: -,
    public_members_url: -,
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
 * @returns {Object} object, example props:
 * 
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
