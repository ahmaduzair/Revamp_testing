"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("products", {
      product_id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      product_desc: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      product_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    });
  },

  down: async (qI) => qI.dropTable("products"),
};
