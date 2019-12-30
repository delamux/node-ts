import { Router } from 'express';
import { index } from '../../controllers/userController';

const router = Router();

router.get( '/', index );


let userRoutes: Router;
userRoutes = router;

export default userRoutes;
