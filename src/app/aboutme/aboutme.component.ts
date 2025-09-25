import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed } from '@angular/core';
import { translations } from '../../../translations';
import { LanguageService } from '../services/language.service';
import { InViewDirective } from '../shared/inView.directive';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, InViewDirective],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss', './aboutme-profile.scss']
})

export class AboutmeComponent {
  language = this.langService.language;
  text = computed(() => translations[this.language()]);

  constructor(private langService: LanguageService) {}
  
  scrollToContact(): void {
    event?.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
