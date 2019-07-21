/* eslint-disable no-await-in-loop */
import models from '../db/models';

const {
  Team, Member, TeamLead, QualityAssuranceManager
} = models;

const generateTeamLeadAndQA = async () => {
  const teamCount = await Team.findAndCountAll();
  let { count } = teamCount;

  while (count > 0) {
    const membersInTeam = await Member.findAndCountAll({ where: { teamId: count } });
    const weeksWithTeamLead = await TeamLead.findAndCountAll({ where: { teamId: count } });

    if (weeksWithTeamLead.count % membersInTeam.count === 0) {
      await Member.update({ hasLed: false, hasQA: false }, { where: { teamId: count } });
    }

    const potentialTeamLeads = await Member.findAll({ where: { teamId: count, hasLed: false } });

    const randomNumberTeamLead = Math.floor(Math.random() * (potentialTeamLeads.length));
    const teamLead = potentialTeamLeads[randomNumberTeamLead];

    const { name, id, teamId } = teamLead;
    await Member.update({ hasLed: true }, { where: { id } });
    await TeamLead.create({
      memberName: name, memberId: id, teamId, week: weeksWithTeamLead.count + 1
    });

    let potentialQAs = await Member.findAll({ where: { teamId: count, hasQA: false } });

    let randomNumberQA = Math.floor(Math.random() * (potentialQAs.length));
    let qa = potentialQAs[randomNumberQA];

    if (qa.id === teamLead.id) {
      potentialQAs = potentialQAs.filter(x => x.id !== teamLead.id);
      randomNumberQA = Math.floor(Math.random() * (potentialQAs.length));
      qa = potentialQAs[randomNumberQA];
    }

    await Member.update({ hasQA: true }, { where: { id: qa.id } });
    await QualityAssuranceManager.create({
      memberName: qa.name, memberId: qa.id, teamId: qa.teamId, week: weeksWithTeamLead.count + 1
    });

    count -= 1;
  }
};

generateTeamLeadAndQA();

export default generateTeamLeadAndQA;
