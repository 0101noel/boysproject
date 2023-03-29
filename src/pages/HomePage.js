import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css'

const HomePage = () => {
  const navigate = useNavigate();
  const buttonText = 'Project Inquiries';

  const handleButtonClick = () => {
    window.open("https://api.whatsapp.com/send?phone=%2B639683590382&fbclid=IwAR3_TNOTKLQYh-bIJAAolN2LYUglv-lRJl6YqKn8PqNPd9DUz0IoIjhKgos");
  };
  

  return (
    <div id="home">
      <section className="landing">
        <div className="home-wrap">
          <div className="home-inner"></div>
        </div>
      </section>
      <section className="home">
        <Container fluid>
          <Row>
            <Col lg={12} className="caption text-center">
              <div style={{ position: 'relative' }}>

                <img src="img/jen.jpg" alt="reception" className="fullscreen-image" style={{ width: '100%', height: '100%' }} />
                <div style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                  <h1>
                    <strong>ALL ABOUT CABINETS</strong>
                  </h1>
                  <h3>WE DESIGN AND BUILD</h3>
                  <Button variant="primary" onClick={handleButtonClick}>
                    {buttonText}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
  );
};

export default HomePage;
