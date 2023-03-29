import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col lg={12} className="text-center">
            <p>© 2023 AAC All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;