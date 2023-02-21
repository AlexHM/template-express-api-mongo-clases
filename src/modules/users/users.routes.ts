import { Router } from 'express';
import UserListController from './controllers/usersList.controller';

export class UserRoutes {
  routes: Router;
  constructor() {
    this.routes = Router();
    this._getRoutes(this.routes);
  }

  private _getRoutes(routes: Router) {
    routes.get('/', (req, res) => new UserListController(req, res));
  }
}

export default new UserRoutes().routes;
