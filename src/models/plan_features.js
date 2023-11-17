module.exports = (sequelize, DataTypes) => {
  const planFeatures = sequelize.define(
    "planFeatures",
    {
      plan_feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoncrement: true,
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
    },
    {
      tableName: "plan_features",
      schema: "public",
      timestamps: false,
    }
  );
  planFeatures.associate = function (models) {
    planFeatures.belongsTo(models.features, {
      foreignKey: "feature_id",
    });

    planFeatures.belongsTo(models.plans, {
      foreignKey: "plan_id",
    });
  };
  return planFeatures;
};
