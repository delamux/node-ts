import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Hello</h1>`);
});

export default router;