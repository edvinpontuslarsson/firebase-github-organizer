'use strict'

const subNames = ['Gösta', 'Doris']

const allTokens = {
    Gösta: {
        token: '123'
    },
    Doris: {
        token: 'abc'
    },
    Batman: {
        token: 'not_subscribed'
    }
}

const isItemInArray = (item, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true
    }
    return false
}

const subTokens = Object.keys(allTokens)
    .filter(user => isItemInArray(user, subNames))
    .map(user => allTokens[`${user}`].token)

console.log(subTokens)

