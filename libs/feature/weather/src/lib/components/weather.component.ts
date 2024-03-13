import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow, IonSpinner
} from "@ionic/angular/standalone";
import {WeatherFacade} from "../state/weather.facade";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCol, IonCardContent, IonSpinner],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  cities: string[] = ['Seattle', 'Denver', 'Miami', 'Boston'];

  constructor(protected weatherFacade: WeatherFacade) {}

  ionViewDidEnter() {
    this.weatherFacade.loadWeather(this.cities);
  }

  getToday() {
    let now = new Date();
    const offset = now.getTimezoneOffset();
    return new Date(now.getTime() - (offset*60*1000));
  }

  getTodayPlus(day: string) {
    let today = this.getToday();
    return new Date(new Date(today).setDate(today.getDate() + Number(day)))
  }
}
