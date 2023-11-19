"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("features", {
      feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      feature_name: { type: DataTypes.STRING(128), allowNull: false },
      insert_ts: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      feature_data: { type: DataTypes.JSON, allowNull: true },
    });
  },

  down: async (qI) => qI.dropTable("features"),
};
