import { Router } from 'express';
import AdminRouter  from "./admin";

const router = Router();

router.use('/admin', AdminRouter);

export default router;