import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from '../config/enviroments/enviromentIndexer';
import { Routes } from './routes';

class App {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  private _initExpressConfig() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.set('port', this.port);
  }

  private _initExternalMiddlewares() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  private _initRoutes() {
    return new Routes(this.app);
  }

  initialize() {
    this._initExpressConfig();
    this._initExternalMiddlewares();
    this._initRoutes();
    return this.app;
  }
}

export default new App(config.port).initialize();
