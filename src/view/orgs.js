'use strict'

import xss from 'xss'

const renderOrgsView = (userData, orgs) => {
    // remove log in btn, apppend log out

    // <button id="logout-btn">Log out</button>
    
    // getByID.innerhtml = getView
}

const getOrgsView = (userData, orgs) => 
    `
    <h1>Welcome ${xss(userData.displayName)}!</h1>
    <img src="${userData.photoURL}" alt="Profile picture" id="profile-pic">
    <h2>Your organisations:</h2>
    ${getOrgDivs(orgs)}
    `

const getOrgDivs = orgs => {
    const divStart = '<div>'

    orgs.forEach(org => {
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
    renderOrgsView
}
