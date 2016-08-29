import React, { Component } from 'react';
import Search from './Search';
import RateCard from './RateCard';
import { updateSearch, handleSearch } from '../modules/eventHandlers'
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
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
          <Search app={this} value={this.state.search} updateSearch={updateSearch} handleClick={handleSearch}/>
          <RateCard rate="USD" value={this.state.rates.length ? this.state.rates[0].USD : ''} />
          <RateCard rate="EUR" value={this.state.rates.length ? this.state.rates[0].EUR : ''}/>
        </div>
      </div>
    );
  }
}

export default App;
