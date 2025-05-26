import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language = this.langService.language;
  isMenuOpen = false;

  constructor(private langService: LanguageService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  switchLang(lang: 'en' | 'de') {
    this.langService.switchLang(lang);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -120;
    const rectTop = element.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset;
    const targetY = rectTop + scrollTop + yOffset;
    if (Math.abs(window.pageYOffset - targetY) < 2) return;
    requestAnimationFrame(() => {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
    this.closeMenu?.();
  }
}
