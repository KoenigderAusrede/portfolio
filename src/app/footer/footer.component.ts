import { Component } from '@angular/core';
import { translations } from '../../../translations';
import { LanguageService } from '../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  constructor(public lang: LanguageService) {}

  text() {
    return translations[this.lang.language()];
  }
}
