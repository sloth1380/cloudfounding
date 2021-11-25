import express, { Router } from 'express';
import { resourceLimits } from 'worker_threads';
import usersRouter from '../actions/users';
import { getList } from '../actions/projects';

const router = Router();

// v1以下のルーティング
router.use('/users', usersRouter);
router.get('/projects', getList);



export default router;