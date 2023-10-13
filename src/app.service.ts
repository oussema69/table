import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private User: any[] = [];

  SetUserData(user: any): any {
  
      this.User.push(user);
      return this.User;
  
   
  }
  


}






