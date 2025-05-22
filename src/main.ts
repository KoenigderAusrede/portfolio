import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';

import { AppComponent }   from './app/app.component';
import { HomeComponent }  from './app/home/home.component';
import { LegalComponent } from './app/legal/legal.component';

const routes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'legal',  component: LegalComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
      })
    )
  ]
});
