require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import { checkStatus, parseJSON, displayStatus } from './fetchUtils';
import { getCurDate, calcDate, compareDates } from './utils';
import { USD, EUR } from '../constants';

export const fetchRate = (app, base, date) => (
fetch(`https://api.fixer.io/${date}?base=${base}&symbols=USD,EUR`)
    .then(res => checkStatus(res))
    .then(res => parseJSON(res))
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

  for (let i = -5; i < 6; i++) { // get preceding and following 6 months of data
    nextDate = calcDate(date, i);
    if (compareDates(nextDate, curDate)) { // conditional - don't search for dates past today
      fetches.push(fetchRate(app, base, nextDate));
      continue;
    }
    break;
  }

  Promise.all(fetches)
    .then(rates => {
      rates.sort((a, b) => {
        if (a.date === b.date) {
          return 0;
        }
        return compareDates(a.date, b.date) ? 1 : -1;
    });
      console.log('rates: ', rates);
      app.setState({ rates, targetRate: rates.length - 6 });
    });
};

export const handleCardClick = (app, base, date) => {
  app.setState({base});
  handleSearch(app, base, date);
};
