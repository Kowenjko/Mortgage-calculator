import React, { Component } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

class EditBank extends Component {
  state = {
    id: 0,
    name: "",
    rate: 0,
    max_loan: 0,
    min_payment: 0,
    loan_term: 0,
    commission: 0,
    IsRedirect: false,
  };
  //   ----------------------------
  getBank = (e) => {
    const name = e.target.value;
    const nameBank = e.target.name;
    this.setState({ [nameBank]: name });
  };
  //   ------------------------------
  SendForm = (e) => {
    e.preventDefault();
    const { name, rate, max_loan, min_payment, loan_term, commission } = this.state;
    const { onEditBank, Bank } = this.props;
    const { id } = this.props.Bank;
    // console.log(this.props);
    const editBank = {
      id: id,
      name: name ? name : Bank.name,
      rate: rate ? rate : Bank.rate,
      max_loan: max_loan ? max_loan : Bank.max_loan,
      min_payment: min_payment ? min_payment : Bank.min_payment,
      commission: commission ? commission : Bank.commission,
      loan_term: loan_term ? loan_term : Bank.loan_term,
    };
    this.setState({ IsRedirect: true });
    onEditBank(editBank);
  };
  //   ------------------------------
  render() {
    const { IsRedirect, name, rate, max_loan, min_payment, loan_term, commission } = this.state;

    const { Bank } = this.props;
    console.log(this.props);
    if (IsRedirect || Bank === null) {
      return <Redirect to='/' />;
    }
    return (
      <Container className='content'>
        <h2 className='text-center text-dark'>Edit Bank</h2>
        <form onSubmit={this.SendForm} id='myform'></form>
        <Table striped bordered hover size='sm' variant='secondary'>
          <thead>
            <tr className='text-center'>
              <th>Bank name</th>
              <th>Interest rate, %</th>
              <th>Max loan, $</th>
              <th>Min down payment, %</th>
              <th>One commission, %</th>
              <th>Loan term, m</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  onChange={this.getBank}
                  // placeholder={name}
                  value={name ? name : Bank.name}
                  form='myform'
                  required
                />
              </td>
              <td>
                {" "}
                <input
                  className='form-control'
                  type='number'
                  name='rate'
                  onChange={this.getBank}
                  // placeholder={rate}
                  value={rate ? rate : Bank.rate}
                  form='myform'
                  required
                />
              </td>
              <td>
                {" "}
                <input
                  className='form-control'
                  type='number'
                  name='max_loan'
                  onChange={this.getBank}
                  // placeholder={max_loan}
                  value={max_loan ? max_loan : Bank.max_loan}
                  form='myform'
                  required
                />
              </td>
              <td>
                {" "}
                <input
                  className='form-control'
                  type='number'
                  name='min_payment'
                  onChange={this.getBank}
                  // placeholder={min_payment}
                  value={min_payment ? min_payment : Bank.min_payment}
                  form='myform'
                  required
                />
              </td>
              <td>
                {" "}
                <input
                  className='form-control'
                  type='number'
                  name='commission'
                  onChange={this.getBank}
                  // placeholder={commission}
                  value={commission ? commission : Bank.commission}
                  form='myform'
                  required
                />
              </td>
              <td>
                {" "}
                <input
                  className='form-control'
                  type='number'
                  name='loan_term'
                  onChange={this.getBank}
                  // placeholder={loan_term}
                  value={loan_term ? loan_term : Bank.loan_term}
                  form='myform'
                  required
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className='d-flex justify-content-between'>
          <Link to='/'>
            <Button variant='secondary'>
              <FontAwesomeIcon size='lg' icon={faUndo}></FontAwesomeIcon>
            </Button>
          </Link>
          <Button type='submit' variant='secondary' form='myform'>
            Save
          </Button>
        </div>
      </Container>
    );
  }
}

export default EditBank;
