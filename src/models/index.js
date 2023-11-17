const path = require("path");
const process = require("process");
const Sequelize = require("sequelize");
const fs = require("fs");
const env = process.env.NODE_ENV || "production";
const config = require("../config/dbConfig")[env];

const db = {};

let sequelize;
if (config) {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: "localhost", // or your database server host
    dialect: "postgres", // Choose the dialect: 'mysql', 'postgres', 'sqlite', 'mssql'

    // Additional options (optional)
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
} else {
  // Handle missing config case
}

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
