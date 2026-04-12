import { Routes } from '@angular/router';
import { FormsComparisonComponent } from './forms-comparison/forms-comparison';

export const routes: Routes = [
  { path: '', component: FormsComparisonComponent },
  { path: '**', redirectTo: '' }
];
