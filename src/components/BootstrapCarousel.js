import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import audience from '../images/audience.jpeg';
import costume from '../images/costume.jpeg';
import deepThoughtCostume from '../images/deepThoughtCostume.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselBootstrap.css';
import headerImage from '../images/pollyNavbarSmall.jpg';

const images = [
  {id: 1, src: audience, location: 'Los Angeles', date: '2023', name: 'The Boys' },
  {id: 2, src: costume, location: 'Chicago', date: '2023', name: 'Coffee Guy' },
  {id: 3, src: deepThoughtCostume, location: 'New York', date: '2023', name: 'Coffee Guy' },
  {id: 4, src: audience, location: 'Los Angeles', date: '2023', name: 'Blah' },
  {id: 5, src: costume, location: 'Chicago', date: '2023', name: 'Kah' },
  {id: 6, src: deepThoughtCostume, location: 'New York', date: '2023', name: 'Pgfasfas' }
];

const BootStrapCarousel = () => {
  const [groupSize, setGroupSize] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setGroupSize(1);
      } else if (window.innerWidth > 800 && window.innerWidth <= 1200) {
        setGroupSize(3);
      } else {
        setGroupSize(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getGroupedImages = (images) => {
    const result = [];
    const extendedImages = [...images];
    
    while (extendedImages.length % groupSize !== 0) {
      extendedImages.push(...images);
    }

    for (let i = 0; i < extendedImages.length; i += groupSize) {
      result.push(extendedImages.slice(i, i + groupSize));
    }

    return result;
  };

  const groupedImages = getGroupedImages(images);

  return (
    <div>
      <header className="carousel-full-width-header">
        <div className="carousel-header-image">
          <img src={headerImage} alt="Portfolio Background" />
        </div>
      </header>

      <div className='carousel-container'>
        <Container fluid style={{ marginTop: '30px' }}>
          <Carousel indicators={true}>
            {groupedImages.map((group, index) => (
              <Carousel.Item key={index}>
                <Row noGutters>
                  {group.map((image, idx) => (
                    <Col key={idx} className="col">
                      <Card>
                        <Card.Img variant="top" src={image.src} alt={image.location} className="card-img-top" />
                        <Card.Body>
                          <Card.Title className="card-title">{image.location}</Card.Title>
                          <Card.Text className="card-text">{image.date}</Card.Text>
                          <div  onClick={(e) => e.stopPropagation()}>
                            <Link to={`portfolio/${image.name}`} >
                              <Card.Text className="card-text">{image.name}</Card.Text>
                          </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default BootStrapCarousel;
