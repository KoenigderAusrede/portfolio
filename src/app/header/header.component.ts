import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

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

  constructor(private langService: LanguageService) {}

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
  if (element) {
    const yOffset = -120;
    const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    const currentY = window.pageYOffset;

    if (Math.abs(currentY - targetY) > 1) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    this.closeMenu?.();
  }
}



}
