'use strict'

import app from './model/app'
import storage from './model/storage'
import auth from './model/auth'
import githubDAL from './model/githubDAL'
import loginView from './view/login'
import orgView from './view/organization'

app.initialize()
loginView.renderLoginView()

const orgUpdatesRef = storage.getOrgUpdatesRef()

// re-renders active organization page at updates
orgUpdatesRef.on('value', async snapshot => {
    if (snapshot.exists()) {
        const orgName = Object.keys(snapshot.val())[0]

        // is organization page active?
        if (document.getElementById(`org-view-${orgName}-div`)) {
            const userData = await auth.getUserData()
            const allOrgs = await githubDAL.fetchOrgs()
            
            const organization = allOrgs.filter(org => 
                org.login === orgName)[0]
            
            orgView.renderOrgView(userData, allOrgs, organization)
        }
    }
})
