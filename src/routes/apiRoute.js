import express from 'express';
import { ApiController } from '../controllers';
import { cacheMidWare } from '../middlewares/cache';

const { apiGetRequestController } = ApiController

const router = express.Router();

router.get('/posts', cacheMidWare, apiGetRequestController);
router.get('/ping', (req, res) => res.status(200).json({ success: true }));


export default router;