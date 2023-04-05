import { Controller,Get ,Post, Put } from '@nestjs/common';
import {AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private userservice: AuthService) {}

    @Get()
    findAll(): any[]{
        return this.userservice.findAll();
        //return 'This action returns all users';
    }
  
    @Post()
    create(): string {
      return 'This action adds a new user';
    }
  
    @Put()
    update() : string {
      return 'This action updates an user';
    }
}
