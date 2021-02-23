import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { filter, map, mergeMap, catchError } from 'rxjs/operators'
import axios from 'axios';

const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=minneapolis&units=imperial&appid=${API_KEY}`;
const observableMiddleware = createEpicMiddleware();
const store = createStore(weatherReducer, applyMiddleware(observableMiddleware));

const fetchWeather = action$ => action$.pipe(
  filter(action => action.type === 'FETCH_WEATHER'),
  mergeMap(async (action) => {
    const url = BASE_URL;
    const weather = await fetch(url).then(res => res.text());
    return Object.assign({}, action, { type: 'FETCH_WEATHER_SUCCESS', weather});
  }),
  catchError(err => Promise.resolve({ type: 'FETCH_WEATHER_ERROR', message: err.message }))
);
observableMiddleware.run(fetchWeather);

function weatherReducer(state = { weather: {} }, action) {

  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS':
      const weather = Object.assign({}, state.weather, { action });
      state = Object.assign({}, state, { weather });
      console.log('New state', state);
      return state;
    default:
      return state;
  }
}

store.dispatch({ type: 'FETCH_WEATHER' });
export default store;
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
