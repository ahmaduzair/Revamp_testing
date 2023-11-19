"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (qI, { DataTypes }) => {
    qI.createTable("plans", {
      plan_id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true,
      },
      plan_name: { type: DataTypes.STRING(128), allowNull: false },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "product_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      user_group_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      current_price: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
        defaultValue: 0,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      insert_ts: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (qI) => qI.dropTable("plans"),
};
