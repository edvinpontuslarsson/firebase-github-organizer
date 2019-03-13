'use strict'

const path = require('path')

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 4000
    }
}
