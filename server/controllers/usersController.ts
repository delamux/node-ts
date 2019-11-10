import {Request, Response} from "express";

const index = (req: Request, res: Response) => {
  res.send(`<h1>Hello User</h1>`);
};


export {
  index
}