import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LanguageService {
  private platformId = inject(PLATFORM_ID);
  language = signal<'en' | 'de'>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const storedLang = localStorage.getItem('language');
      if (storedLang === 'de' || storedLang === 'en') {
        this.language.set(storedLang);
      } else {
        const browserLang = navigator.language?.slice(0, 2);
        this.language.set(browserLang === 'de' ? 'de' : 'en');
      }
    }
  }

  switchLang(lang: 'en' | 'de') {
    if (isPlatformBrowser(this.platformId)) {
      this.language.set(lang);
      localStorage.setItem('language', lang);
    }
  }
}

