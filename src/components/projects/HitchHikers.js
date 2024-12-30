import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import animal1 from "../../images/HitchikerWebsite/arthur_dent_idea.png";
import animal2 from "../../images/HitchikerWebsite/arthur_dent_irl.jpg";
import animal3 from "../../images/HitchikerWebsite/caste_alot.jpg";
import animal4 from "../../images/HitchikerWebsite/ford_prefect_idea.png";
import animal5 from "../../images/HitchikerWebsite/ford_prefect_irl.jpg";
import animal6 from "../../images/HitchikerWebsite/slarti_bartifact_idea.JPG";
import animal7 from "../../images/HitchikerWebsite/slarti_bartifact_irl.jpg";
import animal8 from "../../images/HitchikerWebsite/slarti_bartifact.jpg";
import animal9 from "../../images/HitchikerWebsite/slarti_unchained.jpg";
import animal12 from "../../images/HitchikerWebsite/zapho_carousel.jpg";
import animal11 from "../../images/HitchikerWebsite/zapho_idea.png";
import morrocoEvent6 from "../../images/HitchikerWebsite/zapho_irl.jpg";
import morrocoEvent7 from "../../images/HitchikerWebsite/zapho_on_stge.jpg";
import morrocoEvent8 from "../../images/HitchikerWebsite/zapho_stage.jpg";


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

const Fish_Wife = () => {
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

export default Fish_Wife;
