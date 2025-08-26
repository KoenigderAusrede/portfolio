import { Directive, ElementRef, Renderer2, AfterViewInit, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    // SSR-Guard
    if (!isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.el.nativeElement, 'inView'); // sofort anzeigen für SSR
      return;
    }

    // Browser-Feature-Guard
    const supportsIO = typeof window !== 'undefined' && 'IntersectionObserver' in window;
    if (!supportsIO) {
      this.renderer.addClass(this.el.nativeElement, 'inView');
      return;
    }

    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, 'inView');
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }
}
