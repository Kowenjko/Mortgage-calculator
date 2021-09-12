import React, { Component } from "react";
import { Table, Card, Button } from "react-bootstrap";
import CalculatorItem from "./CalculatorItem/CalculatorItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

class CalculatorList extends Component {
  render() {
    const { name, ListPlayment, total_sum, loan } = this.props.dataBank;

    const item = ListPlayment.map((pay) => {
      return <CalculatorItem key={pay.month} {...pay} />;
    });
    return (
      <>
        <h2 className='text-center'>{name}</h2>
        <Table striped bordered hover size='sm' variant='secondary'>
          <thead>
            <tr className='text-center'>
              <th>Month</th>
              <th>Total payment</th>
              <th>Percentage</th>
              <th>Body</th>
              <th>Balance of payment</th>
            </tr>
          </thead>
          <tbody>{item}</tbody>
        </Table>
        <Card>
          <Card.Body>
            <Card.Text>
              <h2>{`For a loan of ${loan}$ you need to spend ${
                total_sum - loan
              }$, a total of ${total_sum}$`}</h2>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className='d-flex justify-content-end'>
          <Link to='/'>
            <Button className='mb-3 ms-3' variant='secondary'>
              <FontAwesomeIcon size='lg' icon={faUndo}></FontAwesomeIcon>
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default CalculatorList;
