import express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes';
import cors from "cors";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
  }
  private config(): void {
    this.app.use(bodyParser.json({limit: '50mb'}));
    this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    this.app.use(cors());

    this.app.use("/api", router);
  }
}

export default new Server().app;