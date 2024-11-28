import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import coolWall from "../../images/coolWAll.jpeg";
import galaxy from "../../images/galaxy.jpeg";
import scenic from "../../images/scenic.jpeg";
import scenicMountain from "../../images/scenicMountain.jpeg";
import scenicMountainBig from "../../images/scenicMountainBig.jpeg";
import zen from "../../images/zen.jpeg";
import zenMountain from "../../images/zenMountain.jpeg";

const portfolioImages = [
  { id: 1, type: "Costume", src: coolWall },
  { id: 2, type: "Costume", src: galaxy },
  { id: 3, type: "Costume", src: scenic },
  { id: 4, type: "Set", src: scenicMountain },
  { id: 5, type: "Set", src: scenicMountainBig },
  { id: 6, type: "Set", src: zen },
  { id: 7, type: "Set", src: zenMountain }
];

const Project1 = () => {
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

        {/* Styled div for the project description */}
        <div className="project-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p> 
            Aliquam purus sit amet luctus venenatis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
          </p>
          <p>Type - Theatre</p>
          <p>Genre - Short Film</p>
          <p>Year - 2024</p>
        </div>
      </Container>
    </div>
  );
};

export default Project1;
