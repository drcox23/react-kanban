exports.up = function (knex, Promise) {
  return Promise.all([knex.schema.createTable('users', (table) => {
      table.increments('users_id');
      table.string('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable('users')
    
  ])
};