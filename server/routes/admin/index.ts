import * as express from 'express';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.send(`<h1>Hello</h1>`);
});

export default router;