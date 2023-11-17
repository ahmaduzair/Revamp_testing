module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
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
    },
    {
      tableName: "products",
      schema: "public",
      timestamps: false,
    }
  );

  Products.associate = function (models) {
    Products.hasMany(models.plans, {
      foreignKey: "product_id",
    });
  };
  return Products;
};
