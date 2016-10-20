exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name', 255)
    table.string('last_name', 255)
    table.string('email', 255)
      .notNullable()
      .unique();
    table.text('token').unique();
    table.timestamps(true, true);
    table.string('linkedin_user', 255)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
