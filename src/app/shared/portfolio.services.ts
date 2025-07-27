import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PortfolioServices{
  currentClickStatus: WritableSignal<'about'|'skills'|'home'> = signal('about');


}
