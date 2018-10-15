const bookshelf = require('./bookshelf')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: false
})

module.exports = Users