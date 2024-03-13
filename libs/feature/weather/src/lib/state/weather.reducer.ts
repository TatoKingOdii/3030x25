import { createReducer, on } from '@ngrx/store';
import { WeatherActions } from './weather.actions';
import {Weather} from "../weather";

export const weatherFeatureKey = 'weather';

export interface WeatherState {
  weather: Weather[]
  loadingWeather: boolean
}

export const initialState: WeatherState = {
  weather: [],
  loadingWeather: false
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadWeather, state => ({...state, loadingWeather: true})),
  on(WeatherActions.loadWeatherSuccess, (state, {data}) => ({...state, weather: data, loadingWeather: false})),
  on(WeatherActions.loadWeatherFailure, state => ({...state, loadingWeather: false})),
);

