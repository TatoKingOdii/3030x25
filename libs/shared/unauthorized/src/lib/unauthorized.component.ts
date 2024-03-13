import { Component, OnInit } from '@angular/core';
import {IonContent, IonFooter, IonHeader, IonText, IonTitle} from "@ionic/angular/standalone"
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-unauthorized',
  imports: [
    IonContent,
    IonText,
    IonTitle,
    RouterLink,
    IonHeader,
    IonFooter
  ],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  standalone: true
})
export class UnauthorizedComponent {
}
