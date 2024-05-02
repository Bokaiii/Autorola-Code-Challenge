import { Routes } from '@angular/router';
import { CarOverviewComponent } from './car-overview/car-overview.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'overview'},
  {path: 'overview', component: CarOverviewComponent}
];
