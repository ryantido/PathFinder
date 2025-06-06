import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { isAdmin } from '../middlewares/isAdmin';
import { listUsers, updateUserRole, deleteUser } from '../controllers/adminController';

const router = Router();

router.use(authMiddleware, isAdmin);

router.get('/users', listUsers);
router.patch('/users/:id/role', updateUserRole);
router.delete('/users/:id', deleteUser);

// Métiers admin
import { createJob, deleteJob } from '../controllers/adminController';
router.post('/jobs', createJob);
router.delete('/jobs/:id', deleteJob);

// Quiz admin
import { createQuiz, deleteQuiz } from '../controllers/adminController';
router.post('/quiz', createQuiz);
router.delete('/quiz/:id', deleteQuiz);

export default router;
