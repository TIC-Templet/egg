'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';
  // add your config here
  config.middleware = [];
  // cluster
  config.cluster = {
    listen: {
      port: 7007,
      hostname: '0.0.0.0',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'api_pay_dev',
    logging: false,
    dialectOptions: {
      charset: 'utf8mb4',
      // collate: 'utf8mb4_general_ci',
      supportBigNumbers: true,
      bigNumberStrings: true,
    },
    define: {
      freezeTableName: true,
      //      paranoid: true,
      underscored: true,
      charset: 'utf8mb4',
    },
    timezone: '+08:00',
  };
  return config;
};
