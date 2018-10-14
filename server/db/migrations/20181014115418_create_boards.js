exports.up = function (knex, Promise) {
  return Promise.all([knex.schema.createTable('boards', (table) => {
    table.increments();
    table.string('title').notNullable();
  })])
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable('boards')])
};