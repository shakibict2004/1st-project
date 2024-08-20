import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
  return (
    <div>
          <section id="Footer">
      <Container>
        <div className="footer_main">
          <Row>
            <Col lg={6} className="footer_left">
              <h3>Let's Connect</h3>
              <p>
                Please fill out the form on this section to contact me or call
                between 9:00 A.M and 8:00 P.M ET, Monday through Friday.
              </p>
              <div className="icon">
                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </Col>

            <Col lg={6} className="footer_right">
              <h3>Let’s Message Me</h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    </div>
  )
}

export default Footer