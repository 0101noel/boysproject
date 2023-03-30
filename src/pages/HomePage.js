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
      <div className="fullscreen-image-container">
        <img src="img/jen.jpg" alt="reception" className="fullscreen-image" />
        <div className="fullscreen-image-overlay"></div>
        <div className="fullscreen-image-text">
          <h1>
            <strong>ALL ABOUT CABINETS</strong>
          </h1>
          <h3>WE DESIGN AND BUILD</h3>
          <Button className='project-button' variant="primary" onClick={handleButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
