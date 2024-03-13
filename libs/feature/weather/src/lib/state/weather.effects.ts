import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, forkJoin, map, of, tap} from "rxjs";
import {WeatherService} from "./weather.service";
import {WeatherActions} from "./weather.actions";
import {Weather} from "../weather";


@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.loadWeather),
    exhaustMap(action =>
      forkJoin<Weather[]>(action.data.map(city =>
        this.weatherService.getWeather(city).pipe(
          map(res => ({...res, name: city}))
        )
      ))
    ),
    map(result => WeatherActions.loadWeatherSuccess({data: result})),
    catchError((err) => of(
        WeatherActions.loadWeatherFailure({error: 'Failed to load weather details'})))
    ))
}
