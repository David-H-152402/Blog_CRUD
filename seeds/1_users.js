exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('users').insert({
      first_name: 'Bill',
      last_name: 'Maher',
      email: 'bill.maher92@gmail.com',
      created_at: new Date('2016-06-26 12:26:16 UTC'),
      updated_at: new Date('2016-06-26 12:26:16 UTC')
    }),
    knex('users').insert({
      first_name: 'Steven',
      last_name: 'Colbert',
      email: 'steven.colbert08@gmail.com',
      created_at: new Date('2016-06-26 13:26:16 UTC'),
      updated_at: new Date('2016-06-26 13:26:16 UTC')
    }),
    knex('users').insert({
      first_name: 'Joe',
      last_name: 'Rogan',
      email: 'joe.rogan89@gmail.com',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    })
  ]);
};
