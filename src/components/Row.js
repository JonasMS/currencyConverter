import React from 'react';

const Row = ({values, targetRow}) => (
  <tr className={ targetRow ? "target-rate" : "" }>
    {values.map((value, key) => <td key={key}>{value}</td>)}
  </tr>
);

export default Row;
