import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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

    handleNav(id: string, ev?: Event) {
    ev?.preventDefault();
    this.closeMenu();
    this.scrollTo(id);
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  switchLang(lang: 'en' | 'de') {
    this.langService.switchLang(lang);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector('.headerWrapper') as HTMLElement | null;
    const offset = header?.offsetHeight ?? 0;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });

    // update hash
    history.replaceState(null, '', `#${id}`);
  }
}
