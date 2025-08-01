import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'legal',  component: LegalComponent },
  { path: 'privacy', component: PrivacyComponent }
];
