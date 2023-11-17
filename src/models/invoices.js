module.exports = (sequelize, DataTypes) => {
  const invoices = sequelize.define(
    "invoices",
    {
      invoice_id: {
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
        onUpadate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      subscription_history_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "subscription_history",
          key: "subscription_history_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      period_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      period_end_date: {
        type: DataTypes.DATEONLY,
      },
      invoice_desc: {
        type: DataTypes.TEXT,
      },
      invoice_amount: {
        type: DataTypes.DECIMAL(20, 2),
        defaultValue: 0,
        allowNull: false,
      },
      invoice_created_ts: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      invoice_due_ts: { type: DataTypes.DATEONLY },
      invoice_paid_ts: { type: DataTypes.DATE(6) },
    },
    {
      tableName: "invoices",
      timestamps: false,
      schema: "public",
    }
  );
  invoices.associate = function (models) {
    invoices.belongsTo(models.subscriptions, {
      foreignKey: "subscription_id",
    });
    invoices.belongsTo(models.subscriptionsHistory, {
      foreignKey: "subscription_history_id",
    });
  };
  return invoices;
};
