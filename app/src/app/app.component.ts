import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: MenuItem[] = [
    { label: 'Imperative code', routerLink: 'imperative' },
    { label: 'Declarative code', routerLink: 'declarative' },
    { label: 'switchMap', routerLink: 'switchMap' },
    { label: 'concatMap', routerLink: 'concatMap' },
    { label: 'Manual subscriptions', routerLink: 'manual-subs' },
    { label: 'Signals', routerLink: 'signals' },
  ]
}
