'use strict'

import app from './model/app'
import messaging from './model/messaging'
import loginView from './view/login'

;(async () => {
    await app.initialize()
    await messaging.initialize()
    loginView.renderLoginView()
})()

