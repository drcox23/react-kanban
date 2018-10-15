const bookshelf = require('./bookshelf')

const Boards = bookshelf.Model.extend({
  tableName: 'boards',
  hasTimestamps: true
})

module.exports = Boards