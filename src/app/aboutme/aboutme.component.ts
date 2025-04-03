import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SectionLineComponent } from '../shared/section-line/section-line.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SectionLineComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  scrollToContact(): void {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
