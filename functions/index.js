const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp()

const app = express()

// enables Cross-Origin Resource Sharing
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
  const eventHeader = req.headers['x-github-event']
  
  const payload = JSON.parse(req.body.payload)
  
  if (eventHeader === 'ping') {
    storeOrgHook(payload)
    return res.sendStatus(200)
  } else if (eventHeader === 'repository' ||
        eventHeader === 'release' ||
        eventHeader === 'issues' ||
        eventHeader === 'push') {
    notify(eventHeader, payload)

    return res.sendStatus(200)
  } else {
    return res.sendStatus(200)
  }
})

const storeOrgHook = payload => {
  const orgName = payload.organization.login

  admin.database().ref(
    `organizations/${orgName}/hooks`
  ).set({ id: payload.hook_id })
}

const notify = (eventHeader, payload) => {
  getSubTokens(eventHeader, payload).then(tokens => {
    tokens.forEach(token => {
      const message = {
        data: {
          org_name: payload.repository.owner.login,
          repo_name: payload.repository.full_name,
          event: eventHeader,
          action: payload.action || ''
        },
        token
      }

      admin.messaging().send(message)
        .then(() => { console.log('A message successfully sent') })
        .catch(error => { console.error(error) })
    })
  })
}

const getSubTokens = (eventHeader, payload) =>
  new Promise(resolve => {
    getSubNames(eventHeader, payload).then(subNames => {
      admin.database().ref('tokens').once('value', snapshot => {
        const allTokens = snapshot.val()

        const subTokens = Object.keys(allTokens)
          .filter(user => isItemInArray(user, subNames))
          .map(user => allTokens[`${user}`].token)

        resolve(subTokens)
      })
    })
  })

const getSubNames = (eventHeader, payload) =>
  new Promise(resolve => {
    admin.database().ref(
      `organizations/${payload.repository.owner.login}/subscriptions/${eventHeader}`
    ).once('value', snapshot => {
      const result = snapshot.val()
      const usernames = []

      for (const key in result) {
        usernames.push(
          result[`${key}`].username
        )
      }
      
      resolve(usernames)
    })
  })

const isItemInArray = (item, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return true
  }
  return false
}

const server = functions.https.onRequest(app)

module.exports = { server }
