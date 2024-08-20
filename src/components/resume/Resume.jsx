import React from 'react'
import './resume.css'
import { Container, Row, Col } from 'react-bootstrap';

const Resume = () => {
  return (
    <div>
        <section id='Resume'>
      <Container>
        <div className="resume">
          <h3 className="title">A summary of My Resume</h3>
        </div>
        <div className="resume_main">
          <Row>
            <Col lg={6} className="resume_inner_left">
              <div className="resume_inner_title">
                <h3 className="inner_main_title">My Education</h3>
                <h3 className="sub_title">Master in Computer Engineering</h3>
                <h5>Harvard University / 2015 - 2017</h5>
                <p>
                  List skill/technologies here. You can change the icon above to
                  any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
              <hr />
              <div className="resume_inner_title">
                <h3 className="sub_title">Master in Computer Engineering</h3>
                <h5>Harvard University / 2015 - 2017</h5>
                <p>
                  List skill/technologies here. You can change the icon above to
                  any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
              <hr />
              <div className="resume_inner_title">
                <h3 className="sub_title">Master in Computer Engineering</h3>
                <h5>Harvard University / 2015 - 2017</h5>
                <p>
                  List skill/technologies here. You can change the icon above to
                  any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </Col>
            <Col lg={6} className="resume_inner_right">
              <div className="resume_inner_title">
                <h3 className="inner_main_title">My Work Experience</h3>
                <h3 className="sub_title">Sr. Front End Developer</h3>
                <h5>Apple Inc / 2020 - Current</h5>
                <p>
                  List skill/technologies here. You can change the icon above to
                  any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
              <hr />
              <div className="resume_inner_title">
                <h3 className="sub_title">Jr. Front End Developer</h3>
                <h5>Dribbble Inc / 2018 - 2022</h5>
                <p>
                  List skill/technologies here. You can change the icon above to
                  any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
              <hr />
              <div className="resume_inner_title">
                <h3 className="sub_title">HTML Developer</h3>
                <h5>Adobe Inc / 2017 - 2018</h5>
                <p>
                  List skill/technologies here. You can change the icon above to
                  any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    </div>
  )
}

export default Resume