import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements OnInit, OnDestroy {
  @Input() appInViewOnce = true;
  @Input() appInViewRootMargin = '-10% 0px -10% 0px';
  @Input() appInViewThreshold: number | number[] = 0.05;

  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngOnInit() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      this.el.nativeElement.classList.add('inView');
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('inView');
            if (this.appInViewOnce) this.io?.disconnect();
          }
        },
        {
          root: null,
          rootMargin: this.appInViewRootMargin,
          threshold: this.appInViewThreshold,
        }
      );
      this.io.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
