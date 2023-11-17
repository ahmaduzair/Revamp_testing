const envConfig = require("./envConfig");
module.exports = {
  production: {
    username: envConfig.postgres.username,
    password: envConfig.postgres.password,
    database: envConfig.postgres.db,
    host: envConfig.postgres.host,
    port: envConfig.postgres.port,
    dialect: "postgres",

    logging: envConfig.env !== "production" && ((msg) => console.log(msg)),
    define: {
      underscored: true,
      timestamps: true,
    },
  },
};
