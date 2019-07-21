export default (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    teamName: DataTypes.STRING
  }, {});
  Team.associate = (models) => {
    Team.hasMany(models.TeamLead, {
      foreignKey: 'teamId',
      onDelete: 'CASCADE'
    });

    Team.hasMany(models.QualityAssuranceManager, {
      foreignKey: 'teamId',
      onDelete: 'CASCADE'
    });
  };
  return Team;
};
