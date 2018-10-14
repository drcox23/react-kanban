exports.up = function (knex, Promise) {
  return Promise.all([knex.schema.createTable('tasks', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.string('details');
      table.string('priority').notNullable();
      table.string('status').notNullable();
      table.integer('createdBy_UserID').notNullable();
      table.foreign('createdBy_UserID').references('users.id')
      table.integer('assignedTo_UserID').notNullable();
      table.foreign('assignedTo_UserID').references('users.id')
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })


  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable('tasks')])
};