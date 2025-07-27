import {Component, inject} from '@angular/core';
import {PortfolioServices} from '../shared/portfolio.services';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  portfolioServices = inject(PortfolioServices);

}
