export default (sequelize, DataTypes) => {
  const QualityAssuranceManager = sequelize.define('QualityAssuranceManager', {
    memberName: DataTypes.STRING,
    memberId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    week: DataTypes.INTEGER
  }, {});
  QualityAssuranceManager.associate = (models) => {
    QualityAssuranceManager.belongsTo(models.Team, {
      foreignKey: 'teamId',
      onDelete: 'CASCADE'
    });

    QualityAssuranceManager.belongsTo(models.Member, {
      foreignKey: 'memberId',
      onDelete: 'CASCADE'
    });
  };
  return QualityAssuranceManager;
};
