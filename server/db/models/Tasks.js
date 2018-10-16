const bookshelf = require('./bookshelf')
const Users = require('./Users');

const Tasks = bookshelf.Model.extend({
  tableName: 'tasks',
  hasTimestamps: true,
  idAttribute: 'tasks_id',
  createdBy_UserID: function(){
    return this.belongsTo(Users, 'user_id')
  },
  assignedTo_UserID: function(){
    return this.belongsTo(Users, 'users_id')
  }

})

module.exports = Tasks