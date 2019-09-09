import express from 'express';
import apiRoute from './apiRoute';
import middlewares from '../middlewares';

const { validate } = middlewares
const router = express.Router();

router.use('/api', validate('queryValidator'), apiRoute);
export default router;