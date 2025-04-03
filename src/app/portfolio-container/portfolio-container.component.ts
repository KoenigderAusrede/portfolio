import { Component } from '@angular/core';
import { PortfolioItemComponent } from './portfolio-container/portfolio-item/portfolio-item.component';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project';
import { SectionLineComponent } from '../shared/section-line/section-line.component';

@Component({
  selector: 'app-portfolio-container',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent, SectionLineComponent],
  templateUrl: './portfolio-container.component.html',
  styleUrl: './portfolio-container.component.scss'
})
export class PortfolioContainerComponent {
  
  projects: Project[] = [
    {
      title: 'El Pollo Loco',
      image: 'assets/img/Laptop/screen_PoLo.png',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      url: 'https://dieblasers.de/felix/Projekte/ElPolloLoco/index.html',
      github: 'https://github.com/KoenigderAusrede/ElPolloLoco/tree/main',
      tags: ['JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Join Kanban',
      image: 'assets/img/Laptop/screen_join.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      url: 'https://dieblasers.de/felix/Projekte/JoinKanban/',
      github: 'https://github.com/KoenigderAusrede/join-kanban',
      tags: ['Angular', 'TypeScript', 'Firebase']
    },
    {
      title: 'Pokédex',
      image: 'assets/img/Laptop/screen_PoDe.png',
      description: 'This is a description for project three.',
      github: 'https://github.com/KoenigderAusrede/Pokedex',
      url: 'https://dieblasers.de/felix/Projekte/Pokedex/index.html',
      tags: ['API', 'JavaScript', 'HTML']
    }
  ];
  
}