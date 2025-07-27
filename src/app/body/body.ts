import {Component, inject} from '@angular/core';
import {PortfolioServices} from '../shared/portfolio.services';
import {About} from '../menu/about/about';
import {Skills} from '../menu/skills/skills';

@Component({
  selector: 'app-body',
  imports: [
    About,
    Skills
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  portfolioServices = inject(PortfolioServices);
}
