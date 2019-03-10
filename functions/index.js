const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res) => {
    const data = req.body
    
    // get token dynamically from db later
    const token = "fgLBDcbz_Qo:APA91bHX-OEI5OIvaBr1-LBVhzF8nfQLv-IcfJV11RE-18qG9OqtdAMVGWaZjYJji10wNjs5m-yVCY2WfbwO13EGf7ZN5KMc5pXVf_aPSyajKvCF6g1g04X9F56Wks0bY3Z98oF93Lvs"

    admin.messaging().send('Hello from the cloud!')
})
