const http = require('http')

let result = {}

Object.keys(http.STATUS_CODES).forEach(function (item) {
    result[http.STATUS_CODES[item].toUpperCase().replace(/ /g, '_')] = item
})

module.exports = result
