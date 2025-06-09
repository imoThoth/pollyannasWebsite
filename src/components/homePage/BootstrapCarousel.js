import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselBootstrap.css';
import headerImage from '../../images/navBarNewNew.jpg';
import hitchikersGuide from '../../images/HitchikerWebsite/zapho_carousel.jpg';
import mimiCarousel from '../../images/mimiDragMX/mimi_carousel.jpg';
import WildAnimal from '../../images/wildShortAnimal/wildAnimalCarousel.jpg';
import punchDrunkCarousel from '../../images/enitansGame/punchdrunkCarouselNew.jpg';
import Morroccan from '../../images/Morroccan/moroccoCarousel.jpg';
import oneEightyCarousel from '../../images/oneEighty/oneHundredAndEightyCarousel.jpg';
import niceWorkCarousel from '../../images/niceWorkIfYouCanGetIt/niceWorkCarousel.jpg';
import FishWife from '../../images/fish_wife/fishWifeCarousel.jpg';


const images = [
  {id: 1, src: niceWorkCarousel, design: 'Theatre - Set and Costume', date: '2018', name: 'Nice Work If You Can Get It' },
  {id: 2, src: mimiCarousel, design: 'Events - Costume Design / Making', date: '2023', name: 'Drag Mx Great Britain' },
  {id: 3, src: oneEightyCarousel, design: 'Short Film - Production Design & Costume Design', date: '2024', name: 'One Hundred and Eighty' },
  {id: 4, src: punchDrunkCarousel, design: 'Theatre - Costume Supervising', date: '2024', name: 'Enitans Game' },
  {id: 5, src: Morroccan, design: 'Events - Costume Design', date: '2021', name: 'Immersive 70s Marrakesh' },
  {id: 6, src: hitchikersGuide, design: 'Events - Costume Design', date: '2021', name: 'Immersive Hitchhikers Guide to The Galaxy' },
  {id: 7, src: WildAnimal, design: 'Short Film - Production Design & Costume Design', date: '2023', name: 'Wild Animal' },
  {id: 8, src: FishWife, design: 'Short Film - Production Design & Costume Design', date: '2021', name: 'Fish Wife' }
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
                        <div className='link_text' onClick={(e) => e.stopPropagation()} >
                            <Link to={`portfolio/${image.name}`} >
                              <Card.Title className="card-title">{image.name}</Card.Title>
                          </Link>
                          </div>
                          <Card.Text className="card-text">{image.design}</Card.Text>
                          <Card.Text className="card-text">{image.date}</Card.Text>
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
