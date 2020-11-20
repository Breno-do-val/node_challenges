module.exports = {

    client: 'postgresql',
    connection: {
      database: 'cubo',
      user:     'postgres',
      password: 'Br3n0'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/migrations'
    }

};
