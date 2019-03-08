'use strict'

import xss from 'xss'

const renderHomeView = (userData, ghData) => {
    const content = document.getElementById('content-section')
    content.innerHTML = 'Please stand by'
    
    // remove log in btn, apppend log out

    // <button id="logout-btn">Log out</button>
    
    // getByID.innerhtml = getView
}

const getHomeView = (userData, ghData) => 
    `
    <h1>Welcome ${xss(userData.displayName)}!</h1>
    <img src="${userData.photoURL}" alt="Profile picture" id="profile-pic">
    <h2>Your organisations:</h2>
    ${getOrgDivs(ghData)}
    `

const getOrgDivs = ghData => {
    const divStart = '<div>'

    ghData.forEach(item => {
        divStart += `
            <p>title of org</p>
            <p><a href="#" id="title of org">
                title of org 
            </a></p> 
        `

        // add event listener to each link

        // 
    })

    const divEnd = '</div>'

    return divStart + divEnd
}

export default {
    renderHomeView
}
