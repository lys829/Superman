'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'monitor',
      user: 'root',
      password: 'love99',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};