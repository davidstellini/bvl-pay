import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class loginComponent implements OnInit {
  constructor(public authService: AuthService) { }
  ngOnInit() { }

  login(username : string, password : string) {
    this.authService.makeLogin(username, password);
  }


}
