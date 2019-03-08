'use strict'

import auth from './auth'

const getData = () =>
    new Promise((resolve, reject) => {
      const token = auth.getAccessToken()

      const url = 'https://api.github.com/user/orgs'

      const response = await window.fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${token}`
          }
        })
      
      console.log(response.json())
    })

export default { getData }
