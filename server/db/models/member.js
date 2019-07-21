export default (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    name: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    hasLed: DataTypes.BOOLEAN,
    hasQA: DataTypes.BOOLEAN
  }, {});
  Member.associate = (models) => {
    Member.belongsTo(models.Team, {
      foreignKey: 'teamId',
      onDelete: 'CASCADE'
    });

    Member.hasMany(models.TeamLead, {
      foreignKey: 'memberId',
      onDelete: 'CASCADE'
    });

    Member.hasMany(models.QualityAssuranceManager, {
      foreignKey: 'memberId',
      onDelete: 'CASCADE'
    });
  };
  return Member;
};
