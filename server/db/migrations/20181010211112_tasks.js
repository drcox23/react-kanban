exports.up = function (knex, Promise) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('details');
    table.string('priority').notNullable();
    table.string('status').notNullable();
    table.string('createdBy').notNullable();
    table.string('assignedTo').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tasks')
};