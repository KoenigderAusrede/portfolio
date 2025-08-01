import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { translations } from '../../../translations';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  constructor(public lang: LanguageService) {}

  get privacySections() {
    return translations[this.lang.language()].privacy;
  }
}
