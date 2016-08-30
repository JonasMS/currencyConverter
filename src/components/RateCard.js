import React from 'react';
import '../styles/RateCard.scss';

const RateCard = ({rate, currency, value}) => (
  <div className="rate-card">
    <div className="card-contents">
      <span className="currency-sign">{currency}</span>
      <span className="currency-value">{value.toString().slice(0, 5)}</span>
    </div>
  </div>
);

export default RateCard;