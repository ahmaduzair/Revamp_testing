"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("plan_features", {
      plan_feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
      feature_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "features",
          key: "feature_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      date_added: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      date_removed: { type: DataTypes.DATEONLY, allowNull: true },
    });
  },

  down: async (qI) => qI.dropTable("plan_features"),
};
