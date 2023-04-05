import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    private readonly users = [
        { id: 1, name: 'titi' },
        { id: 2, name: 'toto' },
        { id: 3, name: 'tata' },
      ];
    
      findAll(): any[] {
        return this.users;
      }
      create(cat: any) {
        this.users.push(cat);

      }
    
}
