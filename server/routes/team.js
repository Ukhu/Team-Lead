import express from 'express';
import TeamController from '../controllers/TeamController';

const team = express.Router();

const { getTeamLeadAndQA } = TeamController;

team.get('/teams/:teamName', getTeamLeadAndQA);

export default team;
