import { Component } from '@angular/core';

import { XLarge } from './x-large';

@Component({
  selector: 'home',  // <home></home>
  directives: [
    XLarge
  ],
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

}
