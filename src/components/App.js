import React, { Component } from 'react';
import Search from './Search';
import RateCard from './RateCard';
import Table from './Table';
import { updateSearch, handleSearch, getCurDate, dateToEnglish } from '../modules/'
import { USD, EUR, STANDARD_VAL } from '../constants';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: getCurDate(),
      base: USD,
      rates: [],
      targetRate: null,
      error: "",
    }
  }

  render() {
    // console.log(this.state);
    const { targetRate, rates } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Search
            app={this}
            value={this.state.search}
            updateSearch={updateSearch}
            handleClick={handleSearch}
            placeholder={getCurDate}
            />
          <div className="cards-container">
            <div className="searched-date">{rates.length ? dateToEnglish(rates[targetRate].date) : ""}</div>
            <div className="card-container card-left">
              <RateCard
                rate="USD"
                currency={"$"}
                value={rates.length ? rates[targetRate].rates.USD || STANDARD_VAL  : ''}
              />
            </div>
            <div className="card-container card-right">
              <RateCard
                rate="EUR"
                currency={"€"}
                value={rates.length ? rates[targetRate].rates.EUR || STANDARD_VAL : ''}
                />
            </div>
          </div>
          <Table
            headers={["Date", "USD", "EUR"]}
            rows={rates}
            targetRows={[targetRate]}
          />
        </div>
      </div>
    );
  }
}

export default App;
