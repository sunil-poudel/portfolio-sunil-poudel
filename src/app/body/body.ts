import {Component, inject} from '@angular/core';
import {PortfolioServices} from '../shared/portfolio.services';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  portfolioServices = inject(PortfolioServices);
}
