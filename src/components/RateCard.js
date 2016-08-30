import React from 'react';
import '../styles/RateCard.scss';

const RateCard = ({app, base, date, currency, value, selected, handleClick}) => (
  <div
    className={`rate-card ${ selected ? "selected" : ""}`}
    onClick={() => handleClick(app, base, date)}
  >
    <div className="card-contents">
      <span className="currency-sign">{currency}</span>
      <span className="currency-value">{value.toString().slice(0, 5)}</span>
    </div>
  </div>
);

export default RateCard;