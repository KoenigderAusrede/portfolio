import { Component } from '@angular/core';
import { SectionLineComponent } from '../shared/section-line/section-line.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [SectionLineComponent, NgClass],
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

showTooltip = false;

handleLearningTap() {
  this.showTooltip = true;
  setTimeout(() => this.showTooltip = false, 3000);
}

}
