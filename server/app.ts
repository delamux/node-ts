import express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
import cors from "cors";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));

    this.app.use("/api", routes);
  }
}

export default new Server().app;