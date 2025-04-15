import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { translations } from '../../../translations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})

export class TestimonialsComponent {

  constructor(private http: HttpClient, public lang: LanguageService) { }
  text() {
    return translations[this.lang.language()];
  }
  // Testimonials data
  get testimonials() {
    return this.text().testimonials.quotes.map((quote, index) => ({
      ...quote,
      image: `assets/testimonials/avatar${index + 1}.png`
    }));
  }

  currentIndex = 0;

  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setTestimonial(index: number) {
    this.currentIndex = index;
  }
}
