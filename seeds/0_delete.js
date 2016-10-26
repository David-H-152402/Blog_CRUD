exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('comments').del(),
    knex('posts').del(),
    knex('users').del()
  ]);
};
