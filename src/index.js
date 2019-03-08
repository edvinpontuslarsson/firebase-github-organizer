'use strict'

import init from './model/init'
import loginView from './view/login'
import githubDAL from './model/githubDAL'

  ;(async () => {
  init.initialize()
  loginView.renderLoginView()
})()

// also listen for hooks here, send to ghDAL setter
