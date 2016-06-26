import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Control, Validators } from '@angular/common';
import { AuthService } from '../services/authService';


@Component({
  selector: 'login',
  template: require('./login.component.html'),
  styles: [require('./login.styles.css')]
})
export class LoginComponent implements OnInit {
   loginForm: ControlGroup;
  constructor( private builder: FormBuilder, public authService: AuthService) {
    this.loginForm = this.builder.group({
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }


  login(username: string, password: string) {
    this.authService.makeLogin(username, password);
  }

  ngOnInit() {

  }
}
