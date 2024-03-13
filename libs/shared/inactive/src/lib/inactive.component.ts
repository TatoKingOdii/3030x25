import { Component, OnInit } from '@angular/core';
import {IonContent, IonFooter, IonHeader, IonText} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inactive',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    IonFooter,
    IonContent
  ],
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss'],
  standalone: true
})
export class InactiveComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
