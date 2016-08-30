import React from 'react';
import Row from './Row';
import { dateToEnglish } from '../modules';
import '../styles/Table.scss';

const getRate = (rate, spec) => (
  rate.rates[spec] ? rate.rates[spec] : "1"
);

const populateRows = rates => (
  rates.map((rate, key) => (
      <Row
        values={[
          dateToEnglish(rate.date),
          getRate(rate, "USA"),
          getRate(rate, "EUR"),
        ]}
        key={key}
      />
  ))
);

const Table = ({headers, rows}) => (
  <table>
    <thead>
      <tr>
        {headers.map((header, key) => <th key={key}>{header}</th>)}
      </tr>
    </thead>
    <tbody>
      {populateRows(rows)}
    </tbody>
  </table>
);

export default Table;
