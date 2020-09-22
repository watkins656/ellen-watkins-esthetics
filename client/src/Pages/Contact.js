import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown,Container, NavbarBrand, Carousel, Accordion, Card, Button } from 'react-bootstrap'
import ellenFace from '../img/ellen-face.jpeg';
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
        <div id="menu-item-descriptions-title">
        <div className="contact-table-header">
        <table class="contact-table">
          <tbody>
            <tr>
              <td class="contact-table-item">Telephone</td>
              <td class="contact-table-item pink-text">(816) 800-1857</td>
            </tr>
            <tr>
              <td class="contact-table-item">Email</td>
              <a href="mailto:estheticianellen@gmail.com">
              <td class="contact-table-item pink-text">estheticianellen@gmail.com</td>
              </a>
            </tr>
            <tr>
              <td class="contact-table-item">Instagram</td>
<a href="https://www.instagram.com/estheticianellen">
              <td class="contact-table-item pink-text">@estheticianellen</td>
  </a>
            </tr>
            <tr>
              <td class="contact-table-item">Facebook</td>
<a href="https://www.facebook.com/estheticianellen">
              <td class="contact-table-item pink-text">Ellen Watkins Esthetics</td>
  </a>
            </tr>
          </tbody>
        </table>
      </div>
          </div>

      </div>

<BookNowFooter />
    </div >





  );
}

export default App;
