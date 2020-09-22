import React, { Component } from 'react';
import '../App.css';
import logo from '../img/placeholder.PNG';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
function App() {
  return (
    <div className="App">
     <EllenNavbar />  
      <div className="App-header">
        <div className="App-link">
          FAQ        
          </div>
          <table class="faq-table">
          <tbody>
            <tr>
              <td class="faq-table-question">How long are your facial services?</td>
              <td class="faq-table-answer pink-text">All facials are 60 minutes.  Skin treatments vary in time but usually last between 45 minutes and 75 minutes.  Express facials (30 minutes) are available, please call for details.</td>
            </tr>
            <tr>
              <td class="faq-table-question">How often should I get a facial?</td>
              <td class="faq-table-answer pink-text">I recommend monthly facials.  Skin treatments can be added in for most clients in addition to monthly facials.</td>
            </tr>
            <tr>
              <td class="faq-table-question">What is a facial?</td>
              <td class="faq-table-answer pink-text">All facials will include a double cleanse, exfoliation, mask, facial massage, hand and arm massage, neck and shoulder massage, serums, spf moisturizer.  Facial devices and additional implements can be added in by request or offered at my discretion.</td>
            </tr>
            <tr>
              <td class="faq-table-question">Which facial is best for me?</td>
              <td class="faq-table-answer pink-text">
                For first time clients, I always recommend starting with a Custom Facial.  
                The Custom Facial will give me a chance to get to know your skin.  This facial is designed to nourish your skin and is unique to you.  The products chosen will be based upon my analysis of your skin.  
                The Back Facial are great for those who struggle with sun damage, dry skin, and acne breakouts, or for those who workout.  
                The Clarifying Facial is designed to help treat and soothe those with acneic skin, break outs and blackheads, and is also great for teen skin.  
                The Anti-Aging Facial is for those with aging skin concerns such as fine lines and wrinkles, but is also preventative in nature.  
                </td>
            </tr  >
            <tr>
              <td class="faq-table-question">What is the difference between a facial and a skin treatment?</td>
              <td class="faq-table-answer pink-text">
                A facial is designed to cleanse, polish, and nourish your skin, while also providing a relaxing experience and a wonderful feeling of self-care.  Facials are great maintenance for your skin and can serve as routine check-ups.
                Skin treatments are primarily focused on your skin concerns.  Advanced techniques and specialty products are used to help you achieve your skincare goals.  Some skin treatments incorporate the use of machines.
</td>

            </tr>
          </tbody>
        </table>
 
      </div>
    </div>
  );
}

export default App;
