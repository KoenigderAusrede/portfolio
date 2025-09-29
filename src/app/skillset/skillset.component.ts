import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { translations } from '../../../translations';
import { HttpClient } from '@angular/common/http';
import { InViewDirective } from '../shared/inView.directive';

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

scrollToContact(ev?: Event): void {
  ev?.preventDefault();
  const el = document.getElementById('contact');
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', '#contact');
}


showTooltip = false;

handleLearningTap() {
  this.showTooltip = true;
  setTimeout(() => this.showTooltip = false, 3000);
}

}
