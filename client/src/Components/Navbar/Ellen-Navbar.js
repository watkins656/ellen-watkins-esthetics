import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class EllenNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" expanded="defaultExpanded" variant="light" style={{ backgroundColor: '#fcd3db' }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'center' }}>
          <Nav style={{ flexGrow: 1, flexBasis: 0, justifyContent: 'center' }}>
            {/* <Nav.Link href="services">Skin Services and Treatments</Nav.Link> */}
          </Nav>
          <Nav style={{ flexDirection: 'column', flexGrow: 1, flexBasis: 0, justifyContent: 'center' }}>
            <Navbar.Brand href="/" style={{ fontSize: 'xx-large', fontWeight:'bolder'}}>Ellen Watkins Esthetics</Navbar.Brand>
            <NavDropdown title="Menu" id="collasible-nav-dropdown"style={{ fontSize: 'large', fontWeight:'bolder'}}>
              <NavDropdown.Item href="book-appointment">Book Appointment</NavDropdown.Item>
              <NavDropdown.Item href="services">Service Menu</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about-ellen">About Ellen</NavDropdown.Item>
              <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav style={{ flexGrow: 1, flexBasis: 0, justifyContent: 'center' }}>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default EllenNavbar;