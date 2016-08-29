import React from 'react';
import '../styles/RateCard.scss';

const RateCard = ({rate, value}) => (
  <div className="rate-card">
    <span className="currency-sign"></span>
    <span className="currenc-amount">{value}</span>
  </div>
);

export default RateCard;