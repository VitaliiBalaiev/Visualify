import { Routes } from '@angular/router';
import {OverviewComponent} from '../overview/overview.component';
import {CallbackComponent} from '../callback/callback.component';

export const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'overview', component: OverviewComponent },
];
