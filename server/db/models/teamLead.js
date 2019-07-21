export default (sequelize, DataTypes) => {
  const TeamLead = sequelize.define('TeamLead', {
    memberName: DataTypes.STRING,
    memberId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    week: DataTypes.INTEGER
  }, {});
  TeamLead.associate = (models) => {
    TeamLead.belongsTo(models.Team, {
      foreignKey: 'teamId',
      onDelete: 'CASCADE'
    });

    TeamLead.belongsTo(models.Member, {
      foreignKey: 'memberId',
      onDelete: 'CASCADE'
    });
  };
  return TeamLead;
};
