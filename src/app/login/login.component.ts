import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Control, Validators } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'login',
  template: require('./login.component.html'),
  styles: [require('./login.styles.css')],
})
export class loginComponent implements OnInit {
   loginForm: ControlGroup;
  constructor( private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
}

  ngOnInit() {

  }
}
