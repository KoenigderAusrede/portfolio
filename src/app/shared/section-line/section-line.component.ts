import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-line',
  templateUrl: './section-line.component.html',
  styleUrls: ['./section-line.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class SectionLineComponent {
  @Input() text: string = '';
  @Input() position: 'left' | 'right' = 'right';
  @Input() color: string = '#70E61C';
  @Input() tag: string = 'h2';
  @Input() textClass: string = '';
}
