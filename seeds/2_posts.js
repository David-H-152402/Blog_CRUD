exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('posts').insert({
      title: 'Bottom of the Barrel',
      body: 'Has the Trump campaign scraped the bottom of the barrel yet ? I think not',
      user_id: 1,
      created_at: new Date('2016-06-26 12:26:16 UTC'),
      updated_at: new Date('2016-06-26 12:26:16 UTC')
    }),
    knex('posts').insert({
      title: 'What a crazy election!',
      body: 'Im sure everyone in the world is laughing at us right now',
      user_id: 2,
      created_at: new Date('2016-06-26 13:26:16 UTC'),
      updated_at: new Date('2016-06-26 13:26:16 UTC')
    }),
    knex('posts').insert({
      title: 'Trump the business man',
      body: 'If Trump would have put the same $ his dad gave him in an index fund back then, he\'d have the same amount of money by now, so he aint\' a great \'Billionaire\' like he claims to be',
      user_id: 3,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    })
  ]);
};
