/*
 * These are globally available directives in any template
 */
import { PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MATERIAL_DIRECTIVES } from './angular2-material2';


export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  ...MATERIAL_DIRECTIVES
];

export const DIRECTIVES = [
  {provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }
];
