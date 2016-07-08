import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {ActionBar} from './components/actionbar/actionbar';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES, ActionBar ],
  styleUrls: ['./reset.css'],
  templateUrl: './app.html',
})
export class App {
  constructor() {
	  
  }
}
