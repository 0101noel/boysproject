import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './ProjectPage.css'

const Project = () => {
  const [projects] = useState([
    {
      id: 1,
      image: 'img/2.PNG',
      alt: 'Custom Design',
      description: 'New kitchen modular project approved at Olongapo Zambales. Another next in line project. White and gold.',
    },
    {
      id: 2,
      image: 'img/3.PNG',
      alt: 'Materials',
      description: 'Black and gray kitchen, proposal for new client. Additional collection on our kitchen cabinet projects.',
    },
    {
      id: 3,
      image: 'img/4.PNG',
      alt: 'Facebook Page',
      description: 'One of our expertise in Modular cabinets are Kitchens. Another projects to be blessed this 1st week of 2023.',
    },
  ]);

  return (
    <div id="features" className="offset">
        <Container fluid>
          <h1 className="text-center mb-5"><strong>PROJECTS</strong></h1>
          <Row className="justify-content-center">
            {projects.map(project => (
              <Col md={4} key={project.id}>
                <div className="feature">
                  <a href="#">
                    <Image src={project.image} alt={project.alt} fluid />
                  </a>
                  <p>{project.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
};

export default Project;
