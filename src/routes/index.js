import express from 'express';
import apiRoute from './apiRoute';

const router = express.Router();

router.use('/api', apiRoute);
export default router;