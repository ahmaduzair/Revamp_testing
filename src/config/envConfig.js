const path = require("path");
const dotenv = require('dotenv');
const joi = require('joi');

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = joi
  .object()
  .keys({
    PORT: joi.number().default(5000),
    DB_NAME: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_USERNAME: joi.string().required(),
    DB_PASSWORD: joi.string(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
module.exports = {
  port: envVars.PORT,
  postgres: {
    db: envVars.DB_NAME,
    host: envVars.DB_HOST,
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    port: envVars.DB_PORT,
  },
};
