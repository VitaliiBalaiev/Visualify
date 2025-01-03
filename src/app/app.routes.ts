import { Routes } from '@angular/router';
import {OverviewComponent} from '../overview/overview.component';
import {CallbackComponent} from '../callback/callback.component';
import {AuthGuard} from "../guards/auth.guard";
import {HomeComponent} from "../home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
];
