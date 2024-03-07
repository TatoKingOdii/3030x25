import { Component } from '@angular/core';
import {IonApp, IonRouterOutlet} from "@ionic/angular/standalone";

@Component({
  selector: 'c3030x25-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp,
    IonRouterOutlet
  ]
})
export class AppComponent {
  constructor() {}
}
