import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './epics';
import { filter, map, mergeMap, catchError } from 'rxjs/operators'
//const { filter, map } = require('rxjs/operators');
const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const epicMiddleware = createEpicMiddleware();

const fetchWeather = action$ => action$.pipe(
  filter(action => action.type === 'FETCH_WEATHER'),
  mergeMap(async (action) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=minneapolis&units=imperial&appid=${API_KEY}`;
    const weather = await fetch(url).then(res => res.data());
    return Object.assign({}, action, { type: 'FETCH_WEATHER_SUCCESS', weather });
  }),
  catchError(err => Promise.resolve({ type: 'FETCH_WEATHER_ERROR', message: err.message }))
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
