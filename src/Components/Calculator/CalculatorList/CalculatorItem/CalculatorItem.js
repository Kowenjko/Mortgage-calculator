import React from "react";

const CalculatorItem = (props) => {
  const { month, total_payment, percentage, body, balance } = props;

  return (
    <tr className='text-center'>
      <td>{month}</td>
      <td>{total_payment}</td>
      <td>{percentage}</td>
      <td>{body}</td>
      <td>{balance}</td>
    </tr>
  );
};

export default CalculatorItem;
