import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector:'[layout]'
})
export class LayoutDirective{
  @Input() layout:string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  getDirection(){
       return (this.layout === 'column') ? 'column':'row';
  }
}

@Directive({
  selector:'[layout-align]'
})
export class LayoutAlignDirective{
  @HostBinding('style.align-items')
  @HostBinding('style.justify-content')
  @Input('layout-align') layoutAlign : string;
}
