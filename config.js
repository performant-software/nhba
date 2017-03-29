var request = require('superagent')
var config = {}

/***
* Static
***/

config.api = {
  protocol: 'http',
  host: 'localhost',
  port: 8080,
  prefix: 'api'
}

config.endpoint = ''
config.endpoint += config.api.protocol + '://'
config.endpoint += config.api.host + ':'
config.endpoint += config.api.port + '/'
config.endpoint += config.api.prefix + '/'

config.db = 'nhba'
config.brand = 'nhba'

/***
* Methods
***/

config.get = function(route, callback) {
  request
    .get(config.endpoint + route)
    .set('Accept', 'application/json')
    .end(callback)
}

module.exports = config