'use strict'

const obj =
{ edvinpontuslarsson: { username: 'edvinpontuslarsson' }, test_user: { username: 'test_user' } }
const usernames = []

for (const key in obj) {
        usernames.push(
                obj[`${key}`].username
        )
}

console.log(usernames)

