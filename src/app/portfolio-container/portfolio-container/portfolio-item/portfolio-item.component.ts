import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { translations } from '../../../../../translations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  @Input() project!: Project; 

  constructor(private http: HttpClient, public lang: LanguageService) { }

  text() {
   return translations[this.lang.language()];
 }

  openProject(): void {
    if (this.project?.url) {
      window.open(this.project.url, '_blank');
    } else {
      alert('No URL provided for this project!');
    }
  }
}

