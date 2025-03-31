import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { PortfolioContainerComponent } from "./portfolio-container/portfolio-container.component";
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        RouterOutlet, 
        HeaderComponent, 
        AboutmeComponent, 
        SkillsetComponent, 
        PortfolioContainerComponent, 
        FooterComponent, 
        ContactComponent
    ],
})
export class AppComponent {
  title = 'Profile';
}
