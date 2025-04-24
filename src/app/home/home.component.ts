import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutmeComponent,
    SkillsetComponent,
    PortfolioContainerComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
