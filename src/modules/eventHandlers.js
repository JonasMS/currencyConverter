require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import { checkStatus, parseJSON } from './fetchUtils';
import { USD, EUR } from '../constants';

// update state.search
export const updateSearch = (app, e) => (
  app.setState({search: e.target.value})
);


// handle click in search component
export const handleSearch = (app, base, date) => {
  fetch(`https://api.fixer.io/latest?base=${base}&symbols=USD,EUR`)
    .then(res => checkStatus(res))
    .then(res => parseJSON(res))
    .then(result => {
      console.log(result);
      const rates = [];
      const rate = app.state.base === USD ?
        { date, USD: "1", EUR: result.rates.EUR.toString(10) } : { date, USD: result.reates.USD.toString(10), EUR: "1" };
      rates.push(rate);
      app.setState({rates})
    });
};
