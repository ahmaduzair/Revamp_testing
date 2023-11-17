module.exports = (sequelize, DataTypes) => {
  const offerInclude = sequelize.define(
    "offerInclude",
    {
      offer_include_id: { type: DataTypes.INTEGER },
      offer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "offers",
          key: "offer_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      plan_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "plans",
          key: "plan_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
    },
    {
      tableName: "offer_include",
      timestamps: false,
      schema: "public",
    }
  );
  //   offerInclude.associate = function (models) {
  //     offerInclude.belongsTo(models.offers, {
  //       foreignkey: "offer_id",
  //       as: "offers",
  //     });
  //     offerInclude.belongsTo(models.plans, {
  //       foreignkey: "plan_id",
  //       as: "plans",
  //     });
  //   };
  return offerInclude;
};
