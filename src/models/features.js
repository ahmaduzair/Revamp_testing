module.exports = (sequelize, DataTypes) => {
  const features = sequelize.define(
    "features",
    {
      feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoncrement: true,
      },
      feature_name: { type: DataTypes.STRING(128), allowNull: false },
      insert_ts: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      feature_data: { type: DataTypes.JSON, allowNull: true },
    },
    {
      tableName: "features",
      schema: "public",
      timestamps: false,
    }
  );
  features.associate = function (models) {
    features.hasMany(models.planFeatures, {
      foreignKey: "feature_id",
    });
  };
  return features;
};
