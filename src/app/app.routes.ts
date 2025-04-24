// nachher
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';

export const routes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'legal',  component: LegalComponent },
];
