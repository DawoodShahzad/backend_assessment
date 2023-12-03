module.exports = {
    //development: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'social',
        charset: 'utf8',
      },
      migrations: {
        directory: './',
      },
      seeds: {
        directory: './',
      },
    //},
  };