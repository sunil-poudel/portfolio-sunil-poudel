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
  activeMenu = 'about';

  onClickMenuOptions(menu: 'about'|'skills'|'projects'){
    this.portfolioServices.currentClickStatus.set(menu);
    console.log(this.portfolioServices.currentClickStatus());

    this.activeMenu = menu;
  }

}
