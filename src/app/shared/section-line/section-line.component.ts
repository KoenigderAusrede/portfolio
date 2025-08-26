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
@Input() position: 'left' | 'right' = 'right';
@Input() color = '#70E61C';


  @ViewChild('wrapper', { static: true }) wrapperRef!: ElementRef;

  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    if (
      typeof window !== 'undefined' &&
      this.wrapperRef &&
      this.wrapperRef.nativeElement &&
      'IntersectionObserver' in window
    ) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
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
