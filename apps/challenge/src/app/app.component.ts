import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {IonApp, IonContent, IonFooter, IonHeader, IonRouterOutlet} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {addCircle, pencilOutline, trashOutline} from "ionicons/icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IonApp, IonRouterOutlet,
    IonFooter, IonHeader, IonContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '3030x24';

  constructor() {
    addIcons({addCircle, pencilOutline, trashOutline});
  }
}
