import { Component } from '@angular/core';
import { translations } from '../../../translations';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  constructor(public lang: LanguageService) {}

  text() {
    return translations[this.lang.language()];
  }
}
