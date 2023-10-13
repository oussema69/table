import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  add(@Body() user: any):any{
    return this.appService.SetUserData(user);
  }
 

}
