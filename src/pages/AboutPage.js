import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './AboutPage.css';

const AboutContent = () => {
  const [buttonText, setButtonText] = useState('Take a Tour');

  const handleButtonClick = () => {
    setButtonText('Loading...');
    // Do some async task, such as fetching a video from a server
    // and then update the state accordingly
  };

  return (
    <>
      <h1 className="heading">
  <strong>Welcome to All About Cabinet</strong>
</h1>
<p className="lead">
  All About Cabinets, is dedicated on making different designs of
  built-in cabinets and walk-in closet. Most of their client are
  local and nearby area. It was establish by Arc. Jerome Cruz on
  year 2015 with three employees and working on backyard set up
</p>

      <Button
  className="custom-button"
  variant="secondary"
  size="md"
  href="img/REC.mp4"
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleButtonClick}
  disabled={buttonText === 'Loading...'}
>
  {buttonText}
</Button>

    </>
  );
};

const AboutSection = () => {
  return (
    <section id="feature" className="offset">
      <Container fluid className="about-container">
  <div className="col-12 narrow text-center">
    <AboutContent />
  </div>
</Container>

    </section>
  );
};

export default AboutSection;
