'use strict'

import app from './model/app'
import messaging from './model/messaging'
import loginView from './view/login'
import githubDAL from './model/githubDAL'

app.initialize()
messaging.initialize()
loginView.renderLoginView()

