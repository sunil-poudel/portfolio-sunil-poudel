import {Component, inject} from '@angular/core';
import {PortfolioServices} from '../shared/portfolio.services';
import {About} from '../menu/about/about';
import {Skills} from '../menu/skills/skills';
import {Projects} from '../menu/projects/projects';
import {Contact} from '../menu/contact/contact';

@Component({
  selector: 'app-body',
  imports: [
    About,
    Skills,
    Projects,
    Contact
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  portfolioServices = inject(PortfolioServices);
}
