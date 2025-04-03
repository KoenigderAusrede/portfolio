import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})

export class TestimonialsComponent {
  testimonials = [
    {
      text: 'Felix really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      author: 'V. Schuster - Team Partner',
      image: '/assets/testimonials/testi_1.jpg',
    },
    {
      text: 'Felix is a powerhouse when it comes to creative thinking and frontend logic.',
      author: 'A. Mayer - UX Designer',
      image: '/assets/testimonials/testi_2.jpg',
    },
    {
      text: 'Reliable, creative, and focused – it’s a pleasure working with him.',
      author: 'J. Becker - Marketing Lead',
      image: '/assets/testimonials/testi_3.jpg',
    }
  ];

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
