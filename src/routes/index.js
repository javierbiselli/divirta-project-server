import express from 'express';
import salonsRoutes from './salon'

const router = express.Router();

router
  .use('/salons', salonsRoutes);

export default router;