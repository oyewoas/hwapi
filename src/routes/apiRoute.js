import express from 'express';
import { ApiController } from '../controllers';

const { apiGetRequestController } = ApiController

const router = express.Router();

router.get('/posts', apiGetRequestController);
router.get('/ping', (req, res) => res.status(200).json({ success: true }));


export default router;