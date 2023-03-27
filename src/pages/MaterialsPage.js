import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './MaterialPage.css'

const MaterialsPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="mat" className="offset">
      <Container className="text-center">
        <div className="narrow">
          <h1 className="heading"><strong>MATERIALS</strong></h1> 
          <p>Marine-grade plywood, often simply called marine plywood, is not what it's often claimed to be. 
            It is a good-quality, hardwood plywood made with waterproof glue, but since it's not treated with chemicals,
            it is not rot-resistant. Better grades also tend to be lightweight, strong, and virtually free of defects.
            These qualities are what make this plywood a popular choice for building </p>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} id="myCarousel">
          <Carousel.Item>
            <img src="img/Beamount oak.PNG" alt="Beamount Oak" />
            <Carousel.Caption>
              <p>Beamount Oak</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/Sonoma Oak.PNG" alt="Sonoma Oak" />
            <Carousel.Caption>
              <p>Sonoma Oak</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/Gray.PNG" alt="Gray" />
            <Carousel.Caption>
              <p>Gray</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/White.PNG" alt="White" />
            <Carousel.Caption>
              <p>White</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/Black.PNG" alt="Black" />
            <Carousel.Caption>
              <p>Black</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default MaterialsPage;
