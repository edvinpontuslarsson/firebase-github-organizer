'use strict'

import auth from './auth'

const orgs = []

/**
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
const getOrgs = () => orgs

const fetchOrgs = () =>
    new Promise(async (resolve, reject) => {
      const token = auth.getAccessToken()

      const orgsURL = 'https://api.github.com/user/orgs'

      const orgsRes = await window.fetch(orgsURL, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${token}`
          }
        })

      resolve(orgsRes.json())
    })

export default {
  fetchOrgs,
  getOrgs
}
