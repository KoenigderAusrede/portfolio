import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private platformId = inject(PLATFORM_ID);
  language = signal<'en' | 'de'>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const browserLang = navigator.language?.slice(0, 2);
      this.language.set(browserLang === 'de' ? 'de' : 'en');
    }
  }

  switchLang(lang: 'en' | 'de') {
    this.language.set(lang);
  }
}
