import {Request, Response} from "express";

const index = (req: Request, res: Response) => {
  res.send(`<h1>Hello Admin</h1>`);
};


export {
  index
}