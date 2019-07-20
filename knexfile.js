// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: process.env.DATABASE,
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: 'testdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: process.env.DATABASE
    }
  }
}
