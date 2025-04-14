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
      text: 'Felix hat ein bemerkenswertes Talent, kreative Vision mit technischer Umsetzung zu verbinden. Seine Lösungen sind durchdacht, schnell und zuverlässig.',
      author: 'Jonas Bergmann– UX Consultant',
      image: 'assets/testimonials/avatar1.png'
    },
    {
      text: 'In hektischen Projektphasen bleibt Felix ruhig, lösungsorientiert und vor allem menschlich. Ein echter Ruhepol mit klarem Fokus.',
      author: 'Sophie Lange – Scrum Master',
      image: 'assets/testimonials/avatar2.png'
    },
    {
      text: 'Ich habe selten jemanden erlebt, der so strukturiert denkt und gleichzeitig kreative Energie mitbringt. Felix ist ein absoluter Gewinn fürs Team.',
      author: 'Markus Keller – Creative Director',
      image: 'assets/testimonials/avatar3.png'
    },
    {
      text: 'Felix denkt nicht nur mit – er denkt voraus. Seine Ideen bringen Projekte voran, seine Codequalität ist top und seine Kommunikation immer klar.',
      author: 'Anna Weber – Senior Developer',
      image: 'assets/testimonials/avatar4.png'
    },
    {
      text: 'Man merkt sofort, dass Felix nicht nur für Frontend lebt, sondern auch für gutes Teamwork. Empathisch, smart, zielorientiert – Empfehlung von Herzen.',
      author: 'Laura Schneider – Produktmanagerin',
      image: 'assets/testimonials/avatar5.png'
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
