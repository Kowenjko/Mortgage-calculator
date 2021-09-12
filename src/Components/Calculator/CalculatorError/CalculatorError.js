import React from "react";
import { Button, Modal } from "react-bootstrap";

const CalculatorError = ({ dataBank, handleClose }) => {
  const { show, textError, Bank } = dataBank;

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {textError
            ? textError
            : `Enter the correct data: Initial loan < ${Bank.max_loan} or Down payment > ${
                (Bank.min_payment * Bank.max_loan) / 100
              }`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CalculatorError;
