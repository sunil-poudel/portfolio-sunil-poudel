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

  onClickMenuOptions(menu: 'about'|'skills'|'home'){
    this.portfolioServices.currentClickStatus.set(menu);
    console.log(this.portfolioServices.currentClickStatus());
  }
}
