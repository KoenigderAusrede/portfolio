import { Component } from '@angular/core';
import { translations } from '../../../translations';
import { LanguageService } from '../services/language.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  constructor(public lang: LanguageService, private router: Router) {}

  text() {
    return translations[this.lang.language()];
  }
  
  onLegalLinkClick(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['/legal']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

    scrollToContact(): void {
      event?.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
