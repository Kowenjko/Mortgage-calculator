import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./logo.png";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              height='30'
              width='30'
              className='d-inline-block align-top'
              alt='Logo'
            />
            Mortgage calculator
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Bank</Nav.Link>
              <Nav.Link href='/calculator'>Calculator</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
