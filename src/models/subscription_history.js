module.exports = (sequelize, DataTypes) => {
  const subscriptionsHistory = sequelize.define(
    "subscriptionsHistory",
    {
      subscription_history_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      subscription_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "subscriptions",
          key: "subscription_id",
        },
      },
      plan_id: { type: DataTypes.INTEGER, allowNull: false },
      subscription_data: { type: DataTypes.JSON },
      insert_ts: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      date_start: { type: DataTypes.DATEONLY, allowNull: false },
      date_end: { type: DataTypes.DATEONLY },
    },
    {
      tableName: "subscription_history",
      timestamps: false,
      schema: "public",
    }
  );

  subscriptionsHistory.associate = function (models) {
    // Use `foreignKey` for associations, not `primarykey`
    subscriptionsHistory.belongsTo(models.subscriptions, {
      foreignKey: "subscription_id",
    });
    subscriptionsHistory.belongsTo(models.plans, {
      foreignKey: "plan_id",
    });
    // ... other associations
  };

  return subscriptionsHistory;
};
