const app = require("./app");
const config = require("./config/envConfig");
const logger = require("./config/logger");
const db = require("./models/index");

db.sequelize
  .sync()
  .then(() => {
    logger.debug("Synced db.");
    server = app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  })
  .catch((err) => {
    logger.debug(`Failed to sync db: ${err.message}`);
  });
