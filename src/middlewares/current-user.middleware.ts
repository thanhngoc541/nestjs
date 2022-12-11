import { Injectable, NestMiddleware } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UsersService) {}
  async use(req: any, res: any, next: (error?: any) => void) {
    const { userId } = req.session || {};
    console.log(userId);
    if (userId) {
      const user = await this.usersService.findOne(userId);
      req.currentUser = user;
    }
    next();
  }
}
