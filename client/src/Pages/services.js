import React, { Component } from 'react';
import '../App.css';
import skinServicesMenu from '../img/skin-services-menu.jpeg';
import facialsMenu from '../img/facials-menu.jpeg';
import browsLashesMenu from '../img/brows-lashes-menu.jpeg';
import chemicalPeelsMenu from '../img/chemical-peels-menu.jpeg';
import addOnsMenu from '../img/add-ons-menu.jpeg';
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
            <img src={facialsMenu} className="menu-image" alt="menu" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={skinServicesMenu} className="menu-image" alt="menu" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={chemicalPeelsMenu} className="menu-image" alt="menu" />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={browsLashesMenu} className="menu-image" alt="menu" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={addOnsMenu} className="menu-image" alt="menu" />
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

          <Card className="service-menu-card service-menu-header-card">
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
                  Anti-Aging Facial +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>This 60-minute facial can help those with aging skin see visible results. Anti-aging specific products and tools will be used to help alleviate aging concerns such as the appearance of fine lines and wrinkles.
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="3" className="wrap-text">
                <div class="menu-item-text">
                  Clarifying Facial +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                This 60-minute facial is meant for those with acne breakouts or congested skin, but is also great for teens. Acneic skin requires special care and unique tools, and this facial will help provide relief. A homecare consultation is included to help you achieve acne-free skin.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="2" className="wrap-text">
                <div class="menu-item-text">
                  Back Facial +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                This 60-minute service is essentially a facial performed on the back, from the back of the neck to the lower back. Back facials are wonderful at addressing sun damage, acne breakouts, and dry skin. A back massage is included in this service.
</Card.Body>
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







          <Card className="service-menu-card service-menu-header-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="hyrdrafacials"  className="wrap-text">
                <div class="menu-card-header-text">
                  HYDRAFACIAL +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="hyrdrafacials">
              <Card.Body>Using gentle relaxing water exfoliation, excess oil, dead skin and impurities are extracted from the pores.  Moisturizing serums and peptides are infused to leave your skin feeling fresh and rejuvinated.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card service-menu-header-card">
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
                  Microdermabrasion +
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
              <Accordion.Toggle as={Button} variant="link" eventKey="7" className="wrap-text">
                <div class="menu-item-text">
                  Microdermabrasion w/ Oxygen Lift +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                Microdermabrasion meets oxygen therapy for instantly radiant skin.  A traditional microdermabrasion treatment is followed with an oxygenating mask and stem cell infusion leaving skin exfoliated, oxygenated and illuminated.
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

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="microneedling-ormedic" className="wrap-text">
                <div class="menu-item-text">
                  Microneedling with Ormedic Lift+
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="microneedling-ormedic">
              <Card.Body>
All the benefits of microneedling with an added Ormedic lift; this non-chemical peel rebalances, regenerates, and restores skin.
              </Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card className="service-menu-card service-menu-header-card">
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

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="8" className="wrap-text">
                <div class="menu-item-text">
                  O2 Oxygen Lift +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                This luxurious treatment infuses oxygen, plant-derived stem cells, peptides and a high concentration of enzymatic botanicals into the skin, leaving it luminous, refreshed and rejuvenated.
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="ormedic" className="wrap-text">
                <div class="menu-item-text">
                  Ormedic Lift +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="ormedic">
              <Card.Body>
                For all skin types, including sensitive, teen, and unbalanced skin.  A blend of pumpkin, pineapple, papaya and mango fruit enzymes and peptides in an organic aloe vera gel base.  This non-chemical peel re-balances, regenerates, and restores skin while comfrey plant-derived stem cell technology recharges your skins stem cells helping to maintain youthfulness of skin.
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="signature" className="wrap-text">
                <div class="menu-item-text">
                  Signature Facelift +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="signature">
              <Card.Body>
                Image Skincare's signature results-driven treatment combines Vitamin C hydroxy acids and enzymes to speed up cellular renewal.  New technology of centella stem cells support redness prone skin and botanical, detoxifying and energizing complexes give noticeable results in just one session.
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="perfection" className="wrap-text">
                <div class="menu-item-text">
                  Perfection Lift +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="perfection">
              <Card.Body>
                For advanced aging, advanced acne, and advanced pigmentation issues on all skin types, this exclusive blend of exfoliating agents are combined with powerful antioxidants, correcting peptides, and plant derived stem cells to create perfection when treating advanced conditions.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card service-menu-header-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="brows-lashes"  className="wrap-text">
                <div class="menu-card-header-text">
                  BROWS AND LASHES +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="brows-lashes">
              <Card.Body>
                Eyebrow and eyelash enhancements
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">

            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="brow-wax-ting" className="wrap-text">
                <div class="menu-item-text">
                  Brow Wax and Tint +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="brow-wax-ting">
              <Card.Body>
                A brow wax with temporary tint that lasts up to two weeks.
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">

            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="brow-wax" className="wrap-text">
                <div class="menu-item-text">
                  Brow Wax +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="brow-wax">
              <Card.Body>
                Brow wax.  It is what it is!
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">

            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="lash-lift-tint" className="wrap-text">
                <div class="menu-item-text">
                  Lash Lift and Tint +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="lash-lift-tint">
              <Card.Body>
                This darkens and curls your lashes semi-permanently.  Results last 4-6 weeks.  This tends to open up the eyes and greatly enhances lashes.
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">

            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="lash-lift" className="wrap-text">
                <div class="menu-item-text">
                  Lash Lift +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="lash-lift">
              <Card.Body>
                Lash perm is used to semi-permantenly curl the eyelashes for 4-6 weeks.  This service does not include tint.
              </Card.Body>
            </Accordion.Collapse>
          </Card>



          <Card className="service-menu-card service-menu-header-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="add-ons"  className="wrap-text">
                <div class="menu-card-header-text">
                  ADD ONS +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="add-ons">
              <Card.Body>
                Feeling extra? Any of these add-ons may be what you need to really feel pampered at your next facial or treatment!
</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="11" className="wrap-text">
                <div class="menu-item-text">
                  Neck Treatment +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                The extension of facial products down to your collarbone
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="10" className="wrap-text">
                <div class="menu-item-text">
                  Eye Treatment +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                Includes eye serums, eye masks & use of eye massager.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="9" className="wrap-text">
                <div class="menu-item-text">
                  Lip Treatment +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                Includes a lip scrub and lip conditioning treatment.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="12" className="wrap-text">
                <div class="menu-item-text">
                  Hydrojelly Mask +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="12">
              <Card.Body>
                A custom hydrojelly mask to revitalize your skin.
</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="service-menu-card">
            <Card.Header class="menu-item-description">
              <Accordion.Toggle as={Button} variant="link" eventKey="cooling" className="wrap-text">
                <div class="menu-item-text">
                  Cooling Massage +
                    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="cooling">
              <Card.Body>
                The use of ice globes and cold rollers to reduce inflammation in the skin.
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
