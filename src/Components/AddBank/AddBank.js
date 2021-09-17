import React, { Component } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
class AddBank extends Component {
  state = {
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
  compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  };
  //   ------------------------------
  sortedId = () => {
    const { BankList } = this.props;
    let arr = [];
    BankList.forEach((item) => {
      arr.push(item.id);
    });
    let result = arr.sort(this.compareNumeric);
    return result[result.length - 1];
  };
  //   ------------------------------
  SendForm = (e) => {
    e.preventDefault();

    const { name, rate, max_loan, min_payment, loan_term, commission } = this.state;
    const { onAddBank } = this.props;
    console.log(this.sortedId());
    const newBank = {
      Id: this.sortedId() + 1,
      name: name,
      rate: rate,
      max_loan: max_loan,
      min_payment: min_payment,
      commission: commission,
      loan_term: loan_term,
    };
    this.setState({ IsRedirect: true });
    onAddBank(newBank);
  };
  //   ------------------------------
  render() {
    const { IsRedirect } = this.state;
    if (IsRedirect) {
      return <Redirect to='/' />;
    }
    return (
      <Container className='content'>
        <h2 className='text-center text-dark'>Add Bank</h2>
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
                  placeholder='Name'
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
                  placeholder='0'
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
                  placeholder='0'
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
                  placeholder='0'
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
                  placeholder='0'
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
                  placeholder='0'
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

export default AddBank;
