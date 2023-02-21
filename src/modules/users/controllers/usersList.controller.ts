import { Request, Response } from 'express';
import { UserListService } from '../services/usersList.service';

class UserListController {
  constructor(req: Request, res: Response) {
    const list = new UserListService();
    return res.status(200).json(list);
  }
}

export default UserListController;
