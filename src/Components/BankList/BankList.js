import React from "react";
import BankItem from "./BankItem/BankItem";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BankList = ({ BankList, onDelete, onEdit }) => {
  const item = BankList.map((bank) => {
    return (
      <BankItem
        key={bank.id}
        {...bank}
        onDelete={() => onDelete(bank.id)}
        onEdit={() => onEdit(bank.id)}
      />
    );
  });
  return (
    <Container className='content'>
      <h2 className='text-center text-dark'>Bank</h2>
      <Table striped bordered hover size='sm' variant='secondary'>
        <thead>
          <tr className='text-center'>
            <th>Bank name</th>
            <th>Interest rate, %</th>
            <th>Max loan, $</th>
            <th>Min down payment, %</th>
            <th>One-time commission, %</th>
            <th>Loan term, m</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {BankList.length > 0 ? item : <h3 className='text-secondary '>Bank list is not</h3>}
        </tbody>
      </Table>
      <div className='d-flex justify-content-end'>
        <Link to='/addbank'>
          <Button variant='secondary'>Add</Button>
        </Link>
      </div>
    </Container>
  );
};

export default BankList;
