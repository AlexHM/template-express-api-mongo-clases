import { Application } from 'express';
import userRoutes from '../modules/users/users.routes';

export class Routes {
  constructor(app: Application) {
    this._loadUserRoutes(app);
  }

  private _loadUserRoutes(app: Application) {
    app.use('/users', userRoutes);
  }
}
