import { Router } from 'express';
import { listJobs, getJob, createJob, deleteJob } from '../controllers/jobController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', authMiddleware, createJob);
router.delete('/:id', authMiddleware, deleteJob);

export default router;
