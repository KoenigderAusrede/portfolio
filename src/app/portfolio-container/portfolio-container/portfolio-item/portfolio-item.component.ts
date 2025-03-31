import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  @Input() project!: Project; 

  openProject(): void {
    if (this.project?.url) {
      window.open(this.project.url, '_blank');
    } else {
      alert('No URL provided for this project!');
    }
  }
}

