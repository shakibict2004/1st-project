import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Man from '../../assets/Man.png'
import Sun from '../../assets/Sun.png'
import './banner.css'
const Banner = () => {
  return (
    <div>
       <section id="banner">
      <Container>
        <Row>
          <Col md={6} className="banner_text">
            <h3>Hi, I am</h3>
            <h2>Mary Hardy</h2>
            <p>
              Shot what able cold new see hold. Friendly as an betrayed formerly
              he. Morning because as to society behaved moments.
            </p>
            <div className="btn">
              <Button variant="link" href="#">
                 Download CV
              </Button>
              <Button variant="link" href="#">
                 Contact
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="man">
              <img src={Man} alt="" />
            </div>
            <div className="sun">
              <img src={Sun} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Banner