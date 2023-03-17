import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function ProductionTeamPage() {
  const [features] = useState([
    {
      id: 1,
      imgSrc: "img/5.PNG",
      altText: "Modular kitchen cabinet at Guagua Pampanga",
      description: "Another done Modular kitchen cabinet @ Guagua pampanga.",
    },
    {
      id: 2,
      imgSrc: "img/6.PNG",
      altText: "Modular kitchen cabinet installation at Senura, Porac Pampanga",
      description: "Ongoing modular kitchen cabinet installation at Senura, Porac Pampanga.",
    },
    {
      id: 3,
      imgSrc: "img/7.PNG",
      altText: "Wall cladding, PVC ceiling, floor vinyls and tiling expert",
      description: "We are also expert in wall cladding,pvc ceiling, floor vinyls and tiling.",
    },
  ]);

  const [teamMembers] = useState([
    {
      id: 1,
      imgSrc: "img/team3.PNG",
      altText: "Production team member",
    },
    {
      id: 2,
      imgSrc: "img/team4.PNG",
      altText: "Production team member",
    },
  ]);

  return (
    <div id="features" className="offset">
        <Container fluid>
          <h3 className="text-center mb-4">Our Works</h3>
          <hr className="heading-underline" />
          <Row className="text-center">
            {features.map((feature) => (
              <Col md="4" key={feature.id}>
                <div className="feature">
                  <a href="#">
                    <img src={feature.imgSrc} alt={feature.altText} />
                  </a>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      
      <div id="team" className="offset">
          <Container fluid>
            <h1 className="text-center mb-4">Our Production Team</h1>
            <hr className="heading-underline" />
            <Row className="text-center">
              {teamMembers.map((member) => (
                <Col md="4" key={member.id}>
                  <div className="team">
                    <a href="#">
                      <img src={member.imgSrc} alt={member.altText} />
                    </a>
                  </div>
                </Col>
              ))}
              <Col md="4">
                <div className="feature">
                  <p>
                    I wanted to introduce you to our team who has an extensive background in modular cabinet production, and they will bring their experience and skills to our projects. They have a passion for the production and intend to adopt a more sustainable approach to our marketing in the future. I'm sure you will all work with them to ensure a wonderful experience for our company.
                    <br />
                    <br />
                    Cheers,
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
  );
}

export default ProductionTeamPage;
