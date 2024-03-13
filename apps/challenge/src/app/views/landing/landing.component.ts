import {Component} from '@angular/core';
import {IonContent, IonFooter, IonHeader, IonImg, IonText} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {FooterBarComponent} from "../../shared/footer-bar/footer-bar.component";
import {NavBarComponent} from "../../shared/nav-bar/nav-bar.component";
import {CatDirective} from "~challenge/cats";

@Component({
  selector: 'app-landing',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    IonFooter,
    IonContent,
    IonImg,
    FooterBarComponent,
    NavBarComponent,
    CatDirective
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true
})
export class LandingComponent {
  catSize: number = Math.floor(Math.random() * 400) + 200;
}
