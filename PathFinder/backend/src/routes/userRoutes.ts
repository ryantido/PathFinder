import { Router } from 'express';
import { getMe, updateMe, updateSettings } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/me', authMiddleware, getMe);
router.put('/me', authMiddleware, updateMe);
router.put('/me/settings', authMiddleware, updateSettings);

export default router;
