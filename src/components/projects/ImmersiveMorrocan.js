import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import animal1 from "../../images/Morroccan/208_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal2 from "../../images/Morroccan/212_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal3 from "../../images/Morroccan/244_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal4 from "../../images/Morroccan/271_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal5 from "../../images/Morroccan/moroccoCarousel.jpg";
import animal6 from "../../images/Morroccan/morrocoEvent.jpg";
import animal7 from "../../images/Morroccan/morrocoEvent1.jpg";
import animal8 from "../../images/Morroccan/morrocoEvent2.jpg";
import animal9 from "../../images/Morroccan/morrocoEvent3.jpg";
import animal12 from "../../images/Morroccan/morrocoEvent4.jpg";
import animal11 from "../../images/Morroccan/morrocoEvent5.jpg";
import morrocoEvent6 from "../../images/Morroccan/morrocoEvent6.jpg";
import morrocoEvent7 from "../../images/Morroccan/morrocoEvent7.jpg";
import morrocoEvent8 from "../../images/Morroccan/morrocoEvent8.jpg";
import morrocoEvent9 from "../../images/Morroccan/morrocoEvent9.jpg";


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

const ImmersiveMorrocan = () => {
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

export default ImmersiveMorrocan;
