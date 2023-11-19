"use strict";

module.exports = {
  up: async (qI, { DataTypes }) => {
    await qI.changeColumn("subscription_history", "subscription_id", {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "subscriptions",
        key: "subscription_id",
      },
    });
  },

  down: async (qI, { DataTypes }) => {
    await qI.changeColumn("subscription_history", "subscription_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });
  },
};
