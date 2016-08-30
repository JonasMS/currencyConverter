require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import { checkStatus, parseJSON, displayStatus } from './fetchUtils';
import { getCurDate, calcDate, compareDates } from './utils';
import { USD, EUR } from '../constants';

export const fetchRate = (app, base, date) => (
fetch(`https://api.fixer.io/${date}?base=${base}&symbols=USD,EUR`)
    .then(res => checkStatus(res))
    .then(res => parseJSON(res))
    // .then(result => {
    //   console.log('RESULT: ', result);
    //   return result;
    // })
    // .then(result => {
    //   console.log(result);
    //   const rate = app.state.base === USD ?
    //     { date, USD: "1", EUR: result.rates.EUR.toString(10) } : { date, USD: result.reates.USD.toString(10), EUR: "1" };

    //   const rates = app.state.rates.reduce()


    //   app.setState({rates})
    // });
);

// update state.search
export const updateSearch = (app, e) => (
  app.setState({search: e.target.value})
);

// handle click in search component
export const handleSearch = (app, base, date) => {
  const fetches = [];
  const curDate = getCurDate();
  let nextDate;

  for (let i = -6; i < 6; i++) { // get preceding and following 6 months of data
    nextDate = calcDate(date, i);
    console.log('nextDate: ', nextDate);
    if (compareDates(nextDate, curDate)) {
      fetches.push(fetchRate(app, base, nextDate));
      continue;
    }
    break;
  }

  Promise.all(fetches)
    .then(rates => {
      rates.sort((a, b) => !compareDates(a.date, b.date))
      console.log('rates: ', rates);
      app.setState({rates});
    });
};
