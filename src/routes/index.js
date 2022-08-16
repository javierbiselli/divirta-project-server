import express from 'express';
import salonsRoutes from './salon'
import auth from './auth';
import usersRoutes from './users';

const router = express.Router();

router
  .use('/salons', salonsRoutes)
  .use('/users', usersRoutes)
  .use('/auth', auth);

export default router;