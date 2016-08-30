import React from 'react';
import Row from './Row';
import { dateToEnglish } from '../modules';
import { STANDARD_VAL } from '../constants';
import '../styles/Table.scss';

const getRate = (rate, spec) => (
  rate.rates[spec] ? rate.rates[spec] : STANDARD_VAL
);

const populateRows = (rates, targetRows) => (
  rates.map((rate, key) => (
      <Row
        values={[
          dateToEnglish(rate.date),
          getRate(rate, "USA"),
          getRate(rate, "EUR"),
        ]}
        key={key}
        targetRow={targetRows.indexOf(key) > -1}
      />
  ))
);

const Table = ({headers, rows, targetRows}) => (
  <table>
    <thead>
      <tr>
        {headers.map((header, key) => <th key={key}>{header}</th>)}
      </tr>
    </thead>
    <tbody>
      {populateRows(rows, targetRows)}
    </tbody>
  </table>
);

export default Table;
