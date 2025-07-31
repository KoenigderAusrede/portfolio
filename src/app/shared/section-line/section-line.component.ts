import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-section-line',
  templateUrl: './section-line.component.html',
  styleUrls: ['./section-line.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class SectionLineComponent implements AfterViewInit {
  @Input() text: string = '';
  @Input() position: 'left' | 'right' = 'right';
  @Input() color: string = '#70E61C';
  @Input() tag: string = 'h2';
  @Input() textClass: string = '';

  @ViewChild('wrapper', { static: true }) wrapperRef!: ElementRef;

  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    if (
      typeof window !== 'undefined' &&
      this.wrapperRef &&
      this.wrapperRef.nativeElement &&
      'IntersectionObserver' in window
    ) {
      // console.log('Observer attached to:', this.wrapperRef.nativeElement);
      const observer = new window.IntersectionObserver(
        ([entry]) => {
         //  console.log('Intersection event', entry);
          if (entry.isIntersecting) {
            // console.log('SectionLine entered viewport!');
            this.renderer.addClass(this.wrapperRef.nativeElement, 'inView');
            observer.disconnect();
          }
        },
        { threshold: 0.1 } // Adjust threshold as needed
      );
      observer.observe(this.wrapperRef.nativeElement);
    } else {
      // console.log('Observer NOT attached:', this.wrapperRef);
    }
  }
}
