import React from 'react';
import '../styles/Search.scss';

const Search = ({ app, value, updateSearch, handleClick }) => (
  <div className="search">
    <input type="text" value={value} onChange={e => updateSearch(app, e)} />
    <button onClick={() => handleClick(app, 'USD')}>Search</button>
  </div>
);

export default Search;
