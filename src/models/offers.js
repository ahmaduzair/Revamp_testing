const { off } = require("process");

module.exports = (sequelize, DataTypes) => {
  const offers = sequelize.define(
    "offers",
    {
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
    },
    {
      tableName: "offers",
      timestamps: false,
      schema: "public",
    }
  );

  return offers;
};
