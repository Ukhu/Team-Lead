import models from '../db/models';

const { Team, TeamLead, QualityAssuranceManager } = models;

export default class TeamController {
  static async getTeamLeadAndQA(request, response) {
    const { teamName } = request.params;

    try {
      const team = await Team.findOne({ where: { teamName } });

      if (!team) {
        return response.status(404).json({
          status: 'failure',
          message: 'No team found with the given name'
        });
      }

      const teamLead = await TeamLead.findAll({ where: { teamId: team.id }, order: [['createdAt', 'DESC']], limit: 1 });
      const teamQA = await QualityAssuranceManager.findAll({ where: { teamId: team.id }, order: [['createdAt', 'DESC']], limit: 1 });

      if (teamLead.length === 0 || teamQA.length === 0) {
        return response.status(404).json({
          status: 'failure',
          message: 'No team lead or QA available'
        });
      }

      response.status(200).json({
        status: 'success',
        data: {
          teamLead: teamLead[0].memberName,
          qualityAssuranceManager: teamQA[0].memberName,
          week: teamLead[0].week
        }
      });
    } catch (error) {
      response.status(500).json({
        status: 'failure',
        message: error.message
      });
    }
  }
}
