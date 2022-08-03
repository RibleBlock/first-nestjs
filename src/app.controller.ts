import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendMsg(@Body('message') message: string) {
    console.log(message);
    return this.appService.enviar({ message });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
