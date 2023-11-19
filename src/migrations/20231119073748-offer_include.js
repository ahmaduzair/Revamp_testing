"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("offer_include", {
      offer_include_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      plan_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "plans",
          key: "plan_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
    });
  },

  down: async (qI) => qI.dropTable("offer_include"),
};
