import React from 'react';

const Row = ({values}) => (
  <tr>
    {values.map(value => <td>{value}</td>)}
  </tr>
);

export default Row;
