import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import animal1 from "../../images/wildShortAnimal/animal1.jpg";
import animal2 from "../../images/wildShortAnimal/animal2.jpg";
import animal3 from "../../images/wildShortAnimal/animal3.jpg";
import animal4 from "../../images/wildShortAnimal/animal4.jpg";
import animal5 from "../../images/wildShortAnimal/animal5.jpg";
import animal6 from "../../images/wildShortAnimal/animal6.jpg";
import animal7 from "../../images/wildShortAnimal/animal7.jpg";
import animal8 from "../../images/wildShortAnimal/animal8.jpg";
import animal9 from "../../images/wildShortAnimal/animal9.jpg";
import animal12 from "../../images/wildShortAnimal/animal12.jpg";
import animal11 from "../../images/wildShortAnimal/animal11.jpg";

import zen from "../../images/zen.jpeg";
import zenMountain from "../../images/navBarNewNew.jpg";

const portfolioImages = [
  { id: 1, type: "Costume", src: animal1 },
  { id: 2, type: "Costume", src: animal2 },
  { id: 3, type: "Costume", src: animal3 },
  { id: 4, type: "Costume", src: animal4 },
  { id: 5, type: "Costume", src: animal5 },
  { id: 6, type: "Costume", src: animal6 },
  { id: 7, type: "Costume", src: animal7 },
  { id: 8, type: "Costume", src: animal8 }, 
  { id: 9, type: "Costume", src: animal9 },
  { id: 10, type: "Costume", src: animal12 },
  { id: 11, type: "Costume", src: animal11 }


];

const WildShortAnimal = () => {
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

export default WildShortAnimal;
