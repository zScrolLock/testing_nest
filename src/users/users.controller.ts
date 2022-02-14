import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/jwt.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get()
  async get_test() {
    return 'adfkjafjkasjkdaskjld';
  }
}
