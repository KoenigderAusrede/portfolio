import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, Scroll } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private router = inject(Router);
  private headerHeight = 120;

  constructor() {
    this.router.events
      .pipe(filter((e): e is Scroll => e instanceof Scroll))
      .subscribe(e => {
        if (e.anchor !== null) {
          setTimeout(() => {
            const el = document.getElementById(e.anchor as string);
            if (el) {
              const top = el.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({ top: top - this.headerHeight, behavior: 'smooth' });
            }
          }, 0);
        }
      });
  }
}
