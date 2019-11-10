import { Router } from 'express';
import adminRoutes  from "./admin";
import userRoutes from "./users";


const router = Router();

router.use('/users', userRoutes);
router.use('/admin', adminRoutes);

export default router;