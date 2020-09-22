import React from 'react';
import "../../App.scss"
import { Navbar, NavbarBrand, Container } from 'react-bootstrap';

class EllenNavbar extends React.Component {
  render() {
    return (
<div className="footer-pink">
<Navbar color="dark" dark>
  <Container>
    <div className="book-now" style={{margin:"auto"}}><a href="https://square.site/book/TSYFEFHW3V7VR/laser-no-razor-lee-s-summit-mo">Book Now!</a></div>
  </Container>
</Navbar>
</div>
    );
}
}


export default EllenNavbar;