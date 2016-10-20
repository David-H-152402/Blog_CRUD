exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table) {
    table.increments()
    table.text('body')
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
    table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('cascade')
    table.timestamps(true, true);
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
}
