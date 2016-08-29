import React, { Component } from 'react';
import Search from './Search';
import RateCard from './RateCard';
import { updateSearch, handleSearch, getCurDate } from '../modules/'
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: getCurDate(),
      base: "USD",
      rates: [],
      error: "",
    }
  }

  render() {
    console.log(this.state);
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
            <div className="card-container card-left">
              <RateCard rate="USD" value={this.state.rates.length ? this.state.rates[0].USD : ''} />
            </div>
            <div className="card-container card-right">
              <RateCard rate="EUR" value={this.state.rates.length ? this.state.rates[0].EUR : ''}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
