import express from 'express';
import apiRoute from './apiRoute';
import { validate } from '../middlewares';

const router = express.Router();

router.use('/api', validate('queryValidator'), apiRoute);
export default router;