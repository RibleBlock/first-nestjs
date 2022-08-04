import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param() param: any) {
    return this.userService.getUser(param.id);
  }
}
