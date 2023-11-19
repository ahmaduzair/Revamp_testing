"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("offers", {
      offer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      offer_name: { type: DataTypes.STRING(128), allowNull: false },
      start_date: { type: DataTypes.DATEONLY, allowNull: false },
      end_date: { type: DataTypes.DATEONLY },
      offer_desc: { type: DataTypes.TEXT },
      discount_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      discount_percentage: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
      },
      duration_months: { type: DataTypes.INTEGER },
      duration_end_date: { type: DataTypes.DATEONLY },
    });
  },

  down: async (qI) => qI.dropTable("offers"),
};
