import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Menu} from './menu/menu';
import {Body} from './body/body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Menu, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-sunil-poudel');
}
