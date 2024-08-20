import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './about.css'
const AboutC = () => {
  return (
    <div>

    <section id="About">
      <Container className="about_main">
        <h3 className="title">About Me</h3>
        <p className="title_p">
          I’m a designer & developer with a passion for web design. I enjoy
          developing simple, clean, and slick websites that provide real value to
          the end user. Thousands of clients have procured exceptional results
          while working with me. Delivering work within time and budget which
          meets clients' requirements is our motto.
        </p>
        <div className="about_inner">
          <Row>
            <Col md={6} className="inner_items">
              <h4>Name:</h4>
              <h3>Mary Hardy</h3>
            </Col>
            <Col md={6} className="inner_items">
              <h4>Email:</h4>
              <h3>info@gmail.com</h3>
            </Col>
            <Col md={6} className="inner_items">
              <h4>Date of Birth:</h4>
              <h3>11 November 1987</h3>
            </Col>
            <Col md={6} className="inner_items">
              <h4>From:</h4>
              <h3>Los Angeles, USA</h3>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    </div>
  )
}

export default AboutC