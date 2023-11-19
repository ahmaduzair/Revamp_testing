"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("subscription_history", {
      subscription_history_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      subscription_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "subscriptions",
          key: "subscription_id",
        },
      },
      plan_id: { type: DataTypes.INTEGER, allowNull: false },
      subscription_data: { type: DataTypes.JSON },
      insert_ts: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      date_start: { type: DataTypes.DATEONLY, allowNull: false },
      date_end: { type: DataTypes.DATEONLY },
    });
  },

  down: async (qI) => qI.dropTable("subscription_history"),
};
