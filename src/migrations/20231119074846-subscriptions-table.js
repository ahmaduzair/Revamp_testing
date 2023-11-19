"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("subscriptions", {
      subscription_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      user_group_id: { type: DataTypes.INTEGER, allowNull: false },
      trial_start_date: { type: DataTypes.DATEONLY },
      trial_end_date: { type: DataTypes.DATEONLY },
      subscribe_after_trial: { type: DataTypes.BOOLEAN, defaultValue: false },
      plan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "plans",
          key: "plan_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      offer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "offers",
          key: "offer_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      offer_start_date: {
        type: DataTypes.DATEONLY,
      },
      offer_end_date: {
        type: DataTypes.DATEONLY,
      },
      date_subscribed: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      subscription_valid_to: {
        type: DataTypes.DATEONLY,
      },
      date_unsubscribed: {
        type: DataTypes.DATEONLY,
      },
      insert_ts: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (qI) => qI.dropTable("subscriptions"),
};
