'use strict'

import app from './model/app'
import messaging from './model/messaging'
import loginView from './view/login'

app.initialize()
messaging.initialize()
loginView.renderLoginView()

