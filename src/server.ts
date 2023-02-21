import { Application } from 'express';
import dotenv from 'dotenv';
import app from './loaders/app';
import { Database } from './loaders/mongo';
import commonDictionary from './config/dictionaries/common.dictionary';

class Server {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  start() {
    dotenv.config();
    return this.app.listen(this.app?.get('port'), () => {
      process.env.NODE_ENV !== commonDictionary.enviroments.TEST && new Database().connect();
      console.log(`Server running\nPort: ${this.app?.get('port')}\nEnviroment: ${process.env.NODE_ENV}`);
    });
  }
}

export default new Server(app).start();
