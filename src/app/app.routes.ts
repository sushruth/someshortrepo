import { provideRouter, RouterConfig } from '@angular/router';

import {App} from './app';

const routes: RouterConfig = [
  { path: '', component: App },
  { path: ':repo', component: App } //children: [
//     { path: ':repo', component: OverallAnalysis, children: [
//       { path: ':projectid', component: RepoDetail },
//       { path: '', component: RepoDetail }
//     ]}
//   ]}
];

export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
];
