import React, { Component } from 'react';
import './App.css';
import logo from './img/ellen-logo.PNG';
import video from './video/Video.mov';
import videoWide from './video/Video-wide.mov';
import videoNarrow from './video/Video-narrow.mov';
import EllenNavbar from './Components/Navbar/Ellen-Navbar';
import ellenLaser from './img/ellen-lazer-1.jpeg';
import ellenReviews from './img/ellen-reviews.png';
import ellenHomePageImage1 from './img/ellen-homepage-image1.jpg';
import ellenHomePageImage2 from './img/ellen-homepage-image2.jpg';
import ellenHomePageImage3 from './img/ellen-homepage-image3.jpg';
import BookNowFooter from './Components/Navbar/Book-Now-Footer'

function App() {
  return (
    <div className="App">
      <EllenNavbar />
      <div className="App-header">
        <div className="fall">
          Put your best face forward: healthy, glowing skin starts here!
                  </div>
        <img src={ellenLaser} className="ellen-picture-homepage" alt="Ellen" />
            <div className="fall">
          Hi, I'm Ellen Watkins, a Licensed Esthetician in Lee's Summit, MO.  I'm passionate about working with others to achieve their skincare goals through facials and advanced skin treatments.  To learn more about what I offer, please check out my service menu!
                  </div>
        <img src={ellenReviews} className="ellen-reviews" alt="Ellen's Reviews" />
        <div className="ellen-homepage-image-wrapper">
          <img src={ellenHomePageImage1} className="ellen-homepage-image" alt="Ellen" />
          <img src={ellenHomePageImage2} className="ellen-homepage-image" alt="Ellen" />
        </div>
      </div>
      <BookNowFooter />
    </div>
  );
}

export default App;
