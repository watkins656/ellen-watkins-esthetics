import React, { Component } from 'react';
import './App.css';
import logo from './img/ellen-logo.PNG';
import video from './video/Video.mov';
import videoWide from './video/Video-wide.mov';
import videoNarrow from './video/Video-narrow.mov';
import EllenNavbar from './Components/Navbar/Ellen-Navbar';
import ellenReviews from './img/ellen-reviews.png';
import BookNowFooter from './Components/Navbar/Book-Now-Footer'

function App() {
  return (
    <div className="App">
<EllenNavbar />  
      <div className="App-header">
        <div className="fall">
Put your best face forward: healthy, glowing skin starts here!
                  </div>
                  <div className="ellen-video-container">
      <video className="ellen-video"  controls>
      <source src={video} type="video/mp4" />
     </video>
      <video className="ellen-video-wide"  controls>
      <source src={videoWide} type="video/mp4" />
     </video>
      <video className="ellen-video-narrow"  controls>
      <source src={videoNarrow} type="video/mp4" />
     </video>
                  </div>
        <div className="fall">
          Hi, I'm Ellen Watkins, a licensed esthetician in Lee's Summit, MO.  I'm passionate about working with others to achieve their skincare goals through facials and advanced skin treatments.  To learn more about what I offer, please check out my service menu!  
                  </div>
                  <img src={ellenReviews} className="ellen-reviews" alt="Ellen's Reviews" />
      </div>
<BookNowFooter />
    </div>
  );
}

export default App;
