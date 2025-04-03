import { Component } from '@angular/core';
import { SectionLineComponent } from '../shared/section-line/section-line.component';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [SectionLineComponent],
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  scrollToContact(): void {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
