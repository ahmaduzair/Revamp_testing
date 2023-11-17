module.exports = (sequelize, DataTypes) => {
  const offerPrerequisite = sequelize.define(
    "offerPrerequisite",
    {
      offer_prerequisite_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
      tableName: "offer_prerequisite",
      schema: "public",
      timestamps: false,
    }
  );
  //   offerPrerequisite.associate = function (models) {
  //     offerPrerequisite.belongsTo(models.offers, {
  //       foreignkey: "offer_id",
  //       as: "offers",
  //     });
  //     offerPrerequisite.belongsTo(models.plans, {
  //       foreignkey: "plan_id",
  //       as: "plans",
  //     });
  //   };
  return offerPrerequisite;
};
