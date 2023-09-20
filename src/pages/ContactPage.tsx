/* eslint-disable no-unused-vars */
import React from 'react';
import SubHeader from '../components/SubHeader';
import { Col, Container, Row } from 'reactstrap';

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact Us" detail={false} />
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5>Our Address</h5>
          <address>
            37 maple wing drive
            <br />
            Central Islip, NY 11722
            <br />
            U.S.A.
          </address>
        </Col>
        <Col>
          <a role="button" className="btn btn-link" href="tel:+15164507452">
            +1 (516)450-7452
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:mail@bfamcooking.com">
            mail@bfamcooking.com
          </a>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h2>Send Us Your Feedback</h2>
          <hr />
        </Col>
        <Col md="10">TBD: ContactForm</Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
