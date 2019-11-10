import {Router} from 'express';
import {index} from "../../controllers/adminController";

const router = Router();

router.get('/', index);


let adminRoutes: Router;
adminRoutes = router;

export default adminRoutes;