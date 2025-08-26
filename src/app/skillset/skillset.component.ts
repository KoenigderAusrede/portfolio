import { Component, Input } from '@angular/core';
import { SectionLineComponent } from '../shared/section-line/section-line.component';
import { NgClass } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { translations } from '../../../translations';
import { HttpClient } from '@angular/common/http';
import { InViewDirective } from '../shared/in-view.directive';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [ NgClass, InViewDirective],
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  @Input() id?: string;

  constructor(private http: HttpClient, public lang: LanguageService) { }

  text() {
   return translations[this.lang.language()];
 }

  scrollToContact(): void {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

showTooltip = false;

handleLearningTap() {
  this.showTooltip = true;
  setTimeout(() => this.showTooltip = false, 3000);
}

}
