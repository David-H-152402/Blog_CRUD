exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('comments').insert({
      body: 'I think you\'re right about that',
      user_id: 1,
      post_id: 2,
      created_at: new Date('2016-06-26 12:26:16 UTC'),
      updated_at: new Date('2016-06-26 12:26:16 UTC')
    }),
    knex('comments').insert({
      body: 'Yea I agree with you on that one',
      user_id: 3,
      post_id: 2,
      created_at: new Date('2016-06-26 12:26:16 UTC'),
      updated_at: new Date('2016-06-26 12:26:16 UTC')
    })

  ]);
};
