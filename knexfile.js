'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/blog_crud'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/knex_dbname_test',
    debug: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
