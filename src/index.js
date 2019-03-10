'use strict'

import app from './model/app'
import loginView from './view/login'

;(async () => {
    await app.initialize()
    loginView.renderLoginView()
})()

