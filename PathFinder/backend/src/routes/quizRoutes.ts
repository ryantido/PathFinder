import { Router } from 'express';
import { getQuiz, submitQuiz } from '../controllers/quizController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/:id', authMiddleware, getQuiz);
router.post('/:id/submit', authMiddleware, submitQuiz);

export default router;
