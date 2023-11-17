module.exports = (sequelize, DataTypes) => {
  const plans = sequelize.define(
    "plans",
    {
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
    },
    {
      tableName: "plans",
      schema: "public",
      timestamps: false,
      uniqueKeys: {
        plansUnique: {
          fields: ["plan_name", "product_id"],
        },
      },
    }
  );
  plans.associate = function (models) {
    plans.belongsTo(models.Products);
    plans.hasMany(models.planFeatures, {
      foreignKey: "plan_id",
      as: "plan_features",
    });
    plans.hasMany(models.subscriptions, {
      foreignKey: "plan_id",
      as: "subscriptions",
    });
    plans.hasMany(models.subscriptionsHistory, {
      foreignKey: "plan_id",
      as: "subscriptionsHistory",
    });
  };
  return plans;
};
