'use strict'

import login from './login'
import home from './home'
import auth from '../model/auth'

// can later append to this div

const getMenuDiv = (userData, ghData) => {
    const logOutBtn = document.createElement('button')
    logOutBtn.innerText = 'Log out'
    logOutBtn.addEventListener('click', logOut)

    const homeBtn = document.createElement('button')
    homeBtn.innerText = 'Home'
    homeBtn.addEventListener('click', () => {
        home.renderHomeView(userData, ghData)
    })
    
    const div = document.createElement('div')
    div.setAttribute('id', 'menu')
    div.appendChild(logOutBtn)
    div.appendChild(homeBtn)

    return div
}

const logOut = async () => {
    await auth.logOut()
    login.renderLoginView()
}

export default { getMenuDiv }
