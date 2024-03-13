import { createFeatureSelector, createSelector } from '@ngrx/store';
import {weatherFeatureKey, WeatherState} from "./weather.reducer";

export const weatherFeature = createFeatureSelector<WeatherState>(weatherFeatureKey);

export const weather =
  createSelector(weatherFeature, (state: WeatherState) => state.weather);

export const loadingWeather =
  createSelector(weatherFeature, (state: WeatherState) => state.loadingWeather);
