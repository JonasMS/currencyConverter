import React from 'react';

const Row = ({values}) => (
  <tr>
    {values.map((value, key) => <td key={key}>{value}</td>)}
  </tr>
);

export default Row;
