import React, { Component } from 'react';
import Search from './Search';
import RateCard from './RateCard';
import Table from './Table';
import { updateSearch, handleSearch, handleCardClick, getCurDate, dateToEnglish } from '../modules/'
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

  componentWillMount() {
    handleSearch(this, USD, getCurDate());
  }

  render() {
    console.log(this.state);
    const { targetRate, rates, search, base } = this.state;
    const date = rates.length ? dateToEnglish(rates[targetRate].date) : undefined;

    return (
      <div className="App">
        <div className="container">
          <Search
            app={this}
            value={search}
            base={base}
            updateSearch={updateSearch}
            handleClick={handleSearch}
            placeholder={getCurDate}
            />
          <div className="cards-container">
            <div className="searched-date">{rates.length ? date : ""}</div>
            <div className="card-container card-left">
              <RateCard
                app={this}
                base={USD}
                date={search}
                currency={"$"}
                value={rates.length ? rates[targetRate].rates.USD || STANDARD_VAL  : ''}
                selected={base === USD}
                handleClick={handleCardClick}
              />
            </div>
            <div className="card-container card-right">
              <RateCard
                app={this}
                base={EUR}
                date={search}
                currency={"€"}
                value={rates.length ? rates[targetRate].rates.EUR || STANDARD_VAL : ''}
                selected={base === EUR}
                handleClick={handleCardClick}
                />
            </div>
          </div>
          <Table
            headers={["Date", USD, EUR]}
            rows={rates}
            targetRows={[targetRate]}
          />
        </div>
      </div>
    );
  }
}

export default App;
