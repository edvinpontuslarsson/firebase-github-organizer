'use strict'

const renderOrgsView = (router, userData, orgs) => {
    // remove log in btn, apppend log out

    // <button id="logout-btn">Log out</button>
    
    // getByID.innerhtml = getView
}

const getOrgsView = (router, userData, orgs) => 
    `
    <h1>Welcome ${userData[0].displayName}!</h1>
    <img src="${userData[0].photoURL}" alt="Profile picture" id="profile-pic">
    <h2>Your organisations:</h2>
    ${getOrgDivs(router, orgs)}
    `

const getOrgDivs = (router, orgs) => {
    const divStart = '<div>'

    orgs.forEach(org => {
        divStart += `
            <p>title of org</p>
            <p><a href="#" id="title of org">
                title of org 
            </a></p> 
        `

        // add event listener to each link

        // router.navigateTo(title)
    })

    const divEnd = '</div>'

    return divStart + divEnd
}

export default {
    renderOrgsView
}
