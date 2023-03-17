import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  const [setProjectUrl] = useState('folder/index.html');

  const handleProjectClick = () => {
    setProjectUrl('folder/index.html');
  };

  return (
    <div id="home">
      <header>
        <Container fluid>
          <Row className="landing">
            <Col lg={12}>
              <div className="home-wrap">
                <div className="home-inner">
                  <h1 className="text-center">
                    <strong>ALL ABOUT CABINETS</strong>
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Header;