import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown, Container, NavbarBrand, Carousel, Accordion, Card, Button } from 'react-bootstrap'
import ellenFace from '../img/aztec.jpg';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
import BookNowFooter from '../Components/Navbar/Book-Now-Footer'

function App() {
  return (
    <div className="services-treatments-page">
      <EllenNavbar />
      {/* <div id="menu-images">
        <div className="text-center">Click to Enlarge</div>
      </div> */}

      <div id="menu-item-descriptions-wrapper">
        <img src={ellenFace} className="ellen-logo" alt="ellenFace" />
        <div id="menu-item-descriptions-title">
          About Me
          </div>
        <p className='about-ellen-text'>
          Nice to meet you!  I am a KC native and have been passionate about skincare and personal health my entire life.  After a decade of frustration with my personal skin concerns (acne) I found esthetics.  I became fascinated with how the skin works and how to correct and treat skin concerns.  I know what it's like to be frustrated with your own skin and I help others feel confident with their own skin through results-oriented treatments.  My favorite things include wellness, cooking, and being active.  I live in Greenwood with my awesome husband and three birds.
</p>
        <div id="menu-item-descriptions-title">
          Mission Statement
          </div>
        <p className='about-ellen-text'>

          Every face is different and skincare isn't one size fits all.  My philosophy is 'tailored skincare solutions.'  I help my clients set up homecare plans that work and provide luxury skin services and treatments to get everyone glowing like they've always wanted to.  I aim for meaningful relationships with my clients, and the goal for every experience is to make you feel pampered and cared for.
</p>


      </div>

      <BookNowFooter />
    </div >





  );
}

export default App;
