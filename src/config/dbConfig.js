const envConfig = require("./envConfig");
module.exports = {
  development: {
    username: "postgres",
    password: "2426",
    database: "trading_test",
    host: "127.0.0.1",
    port:"5433",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
