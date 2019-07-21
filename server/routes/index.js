import express from 'express';
import team from './team';

const router = express.Router();

router.use('/', team);

export default router;
