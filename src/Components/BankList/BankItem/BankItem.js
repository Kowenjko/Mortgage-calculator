import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

const BankItem = (props) => {
  //   console.log(props);

  const { name, rate, max_loan, min_payment, commission, loan_term, onDelete, onEdit } = props;
  return (
    <tr className='text-center'>
      <td>{name}</td>
      <td>{rate}</td>
      <td>{max_loan}</td>
      <td>{min_payment}</td>
      <td>{commission}</td>
      <td>{loan_term}</td>
      <td className='text-left'>
        <div>
          <Link to='editbank'>
            <FontAwesomeIcon
              className='text-success icon-edit'
              icon={faEdit}
              onClick={onEdit}
              size='lg'
            ></FontAwesomeIcon>
          </Link>
          <FontAwesomeIcon
            onClick={onDelete}
            className='text-danger ms-2 icon-edit'
            icon={faTrash}
            size='lg'
          ></FontAwesomeIcon>
        </div>
      </td>
    </tr>
  );
};

export default BankItem;
