import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary"  >
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="mr-auto items">
            <Nav.Link className="item" href="#home">Home</Nav.Link>
            <Nav.Link className="item" href="#features">About us</Nav.Link>
            <Nav.Link className="item" href="#pricing">Contact us</Nav.Link>

          </Nav>
          <button type="button" className="btn btn-outline-primary">Log in</button>
        </Navbar>

      </div>
    )
  }
}


