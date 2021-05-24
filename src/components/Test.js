import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class Test extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

            </div>
        )
    }
}

export default Test








// import React, { Component } from 'react'

// class ReadyToScroll extends Component {
//     constructor(props) {
//         super(props)
//         this.myRef = React.createRef()  
//     }

//     render() {
//         return <div ref={this.myRef}>Element to scroll to</div> 
//     }  

//     executeScroll = () => this.myRef.current.scrollIntoView();
//     // run this method to execute scrolling. 
//     executeScroll()
// }

// export default ReadyToScroll;


