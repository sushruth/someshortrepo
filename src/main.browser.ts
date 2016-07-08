import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {DataService} from './app/services/dataservice';
// import {enableProdMode} from '@angular/core';

import {RouterOutletMap} from '@angular/router';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';

// enableProdMode()

bootstrap(App, [
	HTTP_PROVIDERS,
	APP_ROUTER_PROVIDERS,
	RouterOutletMap,
	{ provide: LocationStrategy, useClass: HashLocationStrategy },
	DataService
])
	.catch(err => console.error(err));
