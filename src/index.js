const get = require('./get')
const put = require('./put')

module.exports = {
  ...get,
  ...put
}
