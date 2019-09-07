import express from 'express';
import { ApiController } from '../controllers';

const { apiGetRequestController } = ApiController

const router = express.Router();

router.get('/posts', apiGetRequestController);

export default router;