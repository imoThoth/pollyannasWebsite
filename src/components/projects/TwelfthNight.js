import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import twelfthNight1 from "../../images/twelfthNight/twelfthNight1.jpg";
import twelfthNight2 from "../../images/twelfthNight/twelfthNight2.jpg";
import twelfthNight3 from "../../images/twelfthNight/twelfthNight3.jpg";
import twelfthNight4 from "../../images/twelfthNight/twelfthNight4.jpg";
import twelfthNight5 from "../../images/twelfthNight/twelfthNight5.jpg";
import twelfthNight6 from "../../images/twelfthNight/twelfthNight6.jpg";
import twelfthNight7 from "../../images/twelfthNight/twelfthNight7.jpg";
import twelfthNight8 from "../../images/twelfthNight/twelfthNight8.jpg";
import twelfthNight9 from "../../images/twelfthNight/twelfthNight9.jpg";
import twelfthNight10 from "../../images/twelfthNight/twelfthNight10.jpg";
import twelfthNight11 from "../../images/twelfthNight/twelfthNight11.jpg";


import zen from "../../images/zen.jpeg";
import zenMountain from "../../images/navBarNewNew.jpg";

const portfolioImages = [
  { id: 1, type: "Costume", src: twelfthNight1 },
  { id: 2, type: "Costume", src: twelfthNight2 },
  { id: 3, type: "Costume", src: twelfthNight3 },
  { id: 4, type: "Costume", src: twelfthNight4 },
  { id: 5, type: "Costume", src: twelfthNight5 },
  { id: 6, type: "Costume", src: twelfthNight6 },
  { id: 7, type: "Costume", src: twelfthNight7 },
  { id: 8, type: "Costume", src: twelfthNight8 }, 
  { id: 9, type: "Costume", src: twelfthNight9 },
  { id: 10, type: "Costume", src: twelfthNight10 },
  { id: 11, type: "Costume", src: twelfthNight11 }


];

const TwelfthNight = () => {
  return (
    <div>
      <div>
        <header className="project-full-width-header">
          <h1>Project Name</h1>
          <div className="project-header-image">
            <img src={zenMountain} alt="Portfolio Background" />
          </div>
        </header>
      </div>

      <Container className='projectContainer'>
        <hr />
        {/* Bootstrap Carousel using portfolio images */}
        <div className='project-page'>
              <Carousel>
                {portfolioImages.map((image) => (
                  <Carousel.Item key={image.id}>
                    <img
                      className="d-block w-100"
                      src={image.src}
                      alt={`Slide ${image.id}`}
                    />
                    <Carousel.Caption>
                      <h3>{image.type} Design</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
        </div>
  
        {/* Styled div for the project description */}
        {/* <div className="project-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p> 
            Aliquam purus sit amet luctus venenatis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
          </p>
          <p>Type - Theatre</p>
          <p>Genre - Short Film</p>
          <p>Year - 2024</p>
        </div> */}
      </Container>
    </div>
  );
};

export default TwelfthNight;
