import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  makeLogin(username: string, password: string): Promise<any> {
    return null;
  }

}
