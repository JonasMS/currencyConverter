import React from 'react';
import '../styles/Search.scss';

const Search = ({ app, base, value, updateSearch, handleClick, placeholder }) => (
  <div className="search">
    <input type="text" value={value} placeholder={placeholder()} onChange={e => updateSearch(app, e)} />
    <button onClick={() => handleClick(app, base, app.state.search)}>Search</button>
  </div>
);

export default Search;
