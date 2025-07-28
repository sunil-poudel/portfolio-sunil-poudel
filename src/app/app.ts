import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import {Menu} from './menu/menu';
import {Body} from './body/body';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Menu, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-sunil-poudel');
}
