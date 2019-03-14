'use strict'
/*
let subscribers

if (payload.eventType === 'release') {
    subscribers = getReleaseSubscribers(payload.org_name)
}

subscribers.forEach(sub => {
    // message to token, with trycatch
})

function getReleaseSubscribers(orgName) {
    return query(`organisations/${orgName}/release_subscribers`)
}
*/

const oldArr = ['1', '2']
const newArr = []

oldArr.forEach(item => {
    if (item === '2') newArr.push(item)
})

console.log(newArr)
console.log(newArr[0])

