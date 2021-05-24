import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Logo from '../assets/logo.png';
// import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout'



class Header extends Component {
  render() {
    return (
      <div className='headerEn justify-content-end'>
        <Navbar className='headerColor  ' sticky="bottom" >
          <img src={Logo} alt='logo' className='logo' />
          <Navbar.Collapse className="justify-content-end p-5">
          <Nav>
              <Nav.Link className="item" href="/">Home</Nav.Link>
              <Nav.Link className="item" href="/aboutUs">About us</Nav.Link>
              <Nav.Link className="item" href='/' >Contact us</Nav.Link>
              {this.props.auth0.isAuthenticated &&
                <>
                  <Nav.Link className="item" href='/profile' >Profile</Nav.Link>
                  <Logout />
                </>
              }
            </Nav>
          </Navbar.Collapse>
         
            <Login />
         

        </Navbar>

      </div>
    )
  }
}

export default withAuth0(Header);
