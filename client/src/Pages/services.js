import React, { Component } from 'react';
import '../App.css';
import skinServicesMenu from '../img/skin-services.jpg';
import facialsMenu from '../img/facials.png';
import chemicalPeelsMenu from '../img/chemical-peels.jpg';
import { Navbar, Nav, NavDropdown,Container, NavbarBrand, Carousel, Accordion, Card, Button } from 'react-bootstrap'
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
import BookNowFooter from '../Components/Navbar/Book-Now-Footer'
function App() {
  return (
    <div className="services-treatments-page">
  <EllenNavbar />  

      {/* <div id="menu-images">
        <div className="text-center">Click to Enlarge</div>
      </div> */}
      <div id="menu-images-carousel-wrapper">
        <Carousel id="menu-images-carousel">


          <Carousel.Item>
            <a href="#facials"><img src={facialsMenu} className="menu-image" alt="menu" /></a>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
          <a href="#skin-services"><img src={skinServicesMenu} className="menu-image" alt="menu" /></a>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
         

          <Carousel.Item>
          <a href="#peels"><img src={chemicalPeelsMenu} className="menu-image" alt="menu" /></a>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
      </div>
      <div id="menu-item-descriptions-wrapper">
        <div id="menu-item-descriptions-title">
          MENU
          </div>
        <div id="menu-item-descriptions-subtitle">
          Click the '+' for details
          </div>
        <Accordion defaultActiveKey="facials" className="menu-item-descriptions-accordion">

          <Card id="facials" className="service-menu-card service-menu-header-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="facials"  className="wrap-text">
                <div class="menu-card-header-text">
                  FACIALS +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="facials">
              <Card.Body>All facials are 60 minutes and include skincare consultations to help you meet your skin goals. Monthly facials are recommended to achieve the best results.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="0"  className="wrap-text">
                <div class="menu-item-text">
                  Custom Facial +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>This 60-minute facial is designed to be exactly what your skin craves. After a skin analysis, specific products and tools will be chosen to pamper and treat your skin. Facials include a double cleanse, exfoliation, a mask, facial massage, hand/arm massage, serums, and moisturizing SPF. You will be relaxed and glowing!
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="wrap-text">
                <div class="menu-item-text">
                  HydroFacial +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Using gentle relaxing water exfoliation, excess oil, dead skin and impurities are extracted from the pores. Moisturizing serums and peptides are infused to leave your skin feeling fresh and rejuvenated.</Card.Body>
            </Accordion.Collapse>
          </Card>
           <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="5" className="wrap-text">
                <div class="menu-item-text">
                  Ultimate Glow +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Includes a facial with a dermaplane, as well as an O2 Oxygen Lift treatment. This facial is a great way to treat yourself or to get your skin glowing for a big event. This is the most luxurious facial and lasts 90 minutes.
</Card.Body>
            </Accordion.Collapse>
          </Card>







          <Card id="skin-services" className="service-menu-card service-menu-header-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="skin-treatments"  className="wrap-text">
                <div class="menu-card-header-text">
                  SKIN TREATMENTS +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="skin-treatments">
              <Card.Body>
                Skin Treatments - these treatments take your skin to the next level. These services will address specific skin concerns with advanced techniques and tools suited to your skin goals. Monthly facials are recommended in addition to skin treatments.
</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="4" className="wrap-text">
                <div class="menu-item-text">
                  Dermaplaning w/ Facial +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                This 75-minute service includes a custom facial with dermaplaning. Dermaplaning is a physical exfoliation that also removes vellus hair/peach fuzz. Beneficial for acne scarring, dull skin, uneven skin texture, and allows for smoother makeup application.
</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="6" className="wrap-text">
                <div class="menu-item-text">
                  Hydrodermabrasion w/ Facial +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                A 60-minute service that includes a custom facial as well as a mechanical exfoliation. Great for those with uneven skin texture, melasma, acne, scarring, and signs of aging.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          
          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="7.5" className="wrap-text">
                <div class="menu-item-text">
                  Microneedling +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7.5">
              <Card.Body>
                Pricing varies by area, please call for details. This treatment stimulates the growth of collagen and elastin in the skin, therefore helping your skin look younger. This treatment is beneficial for acne scarring, minimizing pore size, and for reducing the appearance of fine lines. This treatment requires a post-treatment kit due to the downtime associated with microneedling.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          
          <Card id="peels" className="service-menu-card service-menu-header-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="chemical-peel"  className="wrap-text">
                <div class="menu-card-header-text">
                  CHEMICAL PEELS +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="chemical-peel">
              <Card.Body>
A peel stimulates the rate of skin exfoliation in a controlled manner.  Peels can reduce superficial imperfections while also building healthy skin structure.  Peels are recommended in a series of 3-6 treatments.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

         
        </Accordion>
      </div>

<BookNowFooter />
    </div >





  );
}

export default App;
