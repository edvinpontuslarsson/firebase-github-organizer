'use strict'

import auth from '../model/auth'
import githubDAL from '../model/githubDAL'
import home from './home'
import contentSection from './contentSection'

const renderLoginView = () => {
    const section = contentSection.getClearedContentSection()    

    const loginBtn = document.createElement('button')
    loginBtn.setAttribute('id', 'login-btn')
    loginBtn.innerText = 'Log in'
    loginBtn.addEventListener('click', login)

    const loginDiv = document.createElement('div')
    loginDiv.appendChild(loginBtn)
    
    section.appendChild(loginDiv)
}

const login = async () => {
    await auth.login()

    const userData = await auth.getUserData()
    const ghData = await githubDAL.fetchData()

    home.renderHomeView(userData, ghData)
}

export default { renderLoginView }
