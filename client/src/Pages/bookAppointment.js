import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown,Container, NavbarBrand, Carousel, Accordion, Card, Button } from 'react-bootstrap'
import logo from '../img/biz-cards.jpeg';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
import BookNowFooter from '../Components/Navbar/Book-Now-Footer';

function App() {
  return (
    <div className="services-treatments-page">
  <EllenNavbar />  
      {/* <div id="menu-images">
        <div className="text-center">Click to Enlarge</div>
      </div> */}
   
      <div id="menu-item-descriptions-wrapper">
      <img src={logo} className="ellen-booking-logo" alt="logo" />
      <div className="book-appointment-header">
        <a
          className="App-link"
          href="https://square.site/book/TSYFEFHW3V7VR/m-power-salon-spa-lee-s-summit-mo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to book with me at M-Power Salon and Spa!
        </a>
        <p className='Booking-text'>
          I take appointments inside of M-Power Salon and Spa, located in Lee's Summit.  When booking an appointment, you will be taken to the M-Power booking site.  If you are not sure which facial to book, the Custom Facial is a great place to start.  If this is your first appointment with me, please arrive 10-15 minutes prior to your appointment.  I'll see you soon!
        </p>

          </div>
        
     
      </div>
<BookNowFooter />
    </div >





  );
}

export default App;
