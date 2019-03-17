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
  console.log(payload)
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

const notify = (eventHeader, reqBody) => {
  getSubTokens(eventHeader, reqBody).then(tokens => {
    tokens.forEach(token => {
      const message = {
        data: {
          org_name: reqBody.sender.login,
          repo_name: reqBody.repository.full_name,
          event: eventHeader,
          action: reqBody.action
        },
        token
      }

      admin.messaging().send(message)
        .catch(error => { console.error(error) })
    })
  })
}

const getSubTokens = (eventHeader, reqBody) =>
  new Promise(resolve => {
    getSubNames(eventHeader, reqBody).then(subNames => {
      admin.database().ref('tokens').once('value', snapshot => {
        const allTokens = snapshot.val()

        const subTokens = Object.keys(allTokens)
          .filter(user => isItemInArray(user, subNames))
          .map(user => allTokens[`${user}`].token)

        resolve(subTokens)
      })
    })
  })

const getSubNames = (eventHeader, reqBody) =>
  new Promise(resolve => {
    admin.database().ref(
      `organizations/${reqBody.sender.login}/subscriptions/${eventHeader}`
    ).once('value', snapshot => {
      const usernames = Object.values(snapshot.val())
        .map(item => item.username)

      resolve(usernames)

      resolve(snapshot.val())
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
