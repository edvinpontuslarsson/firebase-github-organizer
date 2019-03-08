'use strict'

import auth from './auth'

const data = []

const getData = () => data

const fetchData = () =>
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
      
      console.log(orgsRes.json())

      resolve()
    })

export default {
  fetchData,
  getData
}
