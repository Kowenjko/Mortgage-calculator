import React, { Component } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CalculatorError from "./CalculatorError/CalculatorError";
import CalculatorList from "./CalculatorList/CalculatorList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

// -----------------------------------

class Calculator extends Component {
  // -----------------------------------
  state = {
    ListPlayment: [],
    Bank: {},
    total_sum: 0,
    name: "",
    loan: 0,
    payment: 0,
    view: false,
    show: false,
    text: "",
  };
  // -----------------------------------
  handleClose = () => {
    this.setState({ show: false });
  };

  // -----------------------------------
  getBank = (e) => {
    const name = e.target.value;
    const nameBank = e.target.name;
    this.setState({ [nameBank]: name });
  };

  SendForm = (e) => {
    e.preventDefault();
    const { BankList } = this.props;
    const { name, loan, payment } = this.state;
    const index = BankList.findIndex((elem) => elem.name === name);
    if (name) {
      const user_payment = (BankList[index].min_payment * BankList[index].max_loan) / 100;
      if (BankList[index].max_loan >= loan && loan > 0 && user_payment <= payment) {
        let total_payment =
          (loan *
            (BankList[index].rate / 1200) *
            Math.pow(1 + BankList[index].rate / 1200, BankList[index].loan_term)) /
          (Math.pow(1 + BankList[index].rate / 1200, BankList[index].loan_term) - 1);
        let sum_payment = loan - payment + (loan - (loan * BankList[index].commission) / 100);
        let percentage = (loan * BankList[index].rate) / 1200;
        let body = total_payment - percentage;
        let balance = loan - body;
        let arr_payment = [];
        for (let i = 1; i <= BankList[index].loan_term; i++) {
          let obj_payment = {};

          obj_payment = {
            month: i,
            total_payment: total_payment.toFixed(2),
            percentage: percentage.toFixed(2),
            body: body.toFixed(2),
            balance: balance.toFixed(2),
          };
          arr_payment.push(obj_payment);
          percentage = (balance * BankList[index].rate) / 1200;
          body = total_payment - percentage;
          balance = balance - body;
        }

        this.setState({
          ListPlayment: arr_payment,
          Bank: BankList[index],
          view: true,
          total_sum: sum_payment,
          textError: "",
        });
      } else {
        this.setState({ Bank: BankList[index], view: false, show: true, textError: "" });
      }
    } else {
      this.setState({
        Bank: BankList[index],
        view: false,
        show: true,
        textError: "Please select a bank",
      });
    }
  };
  // -----------------------------------
  render() {
    const { BankList } = this.props;
    const item = BankList.map((bank) => {
      return (
        <option key={bank.id} value={bank.name}>
          {bank.name}
        </option>
      );
    });

    return (
      <Container className='content'>
        <h2 className='text-center text-dark'>Mortgage calculator</h2>
        <Form onSubmit={this.SendForm}>
          <Row className='d-flex justify-content-center align-items-end'>
            <Col>
              <Form.Group className='mb-3' controlId='formGroup'>
                <Form.Label>Select bank</Form.Label>
                <Form.Select
                  onChange={this.getBank}
                  name='name'
                  aria-label='Default select example'
                >
                  <option>Open this select bank</option>
                  {item}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formGroup'>
                <Form.Label>Initial loan</Form.Label>
                <Form.Control onChange={this.getBank} name='loan' type='number' placeholder='0' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formGroup'>
                <Form.Label>Down payment</Form.Label>
                <Form.Control
                  onChange={this.getBank}
                  name='payment'
                  type='number'
                  placeholder='0'
                />
              </Form.Group>
            </Col>
            <Col>
              <Button type='submit' className='mb-3' variant='secondary'>
                Calculate
              </Button>
              <Link to='/'>
                <Button className='mb-3 ms-3' variant='secondary'>
                  <FontAwesomeIcon size='lg' icon={faUndo}></FontAwesomeIcon>
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
        {this.state.view ? (
          <CalculatorList dataBank={this.state} />
        ) : (
          <CalculatorError dataBank={this.state} handleClose={this.handleClose} />
        )}
      </Container>
    );
  }
}

export default Calculator;
