import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import punchDrunk2 from "../../images/enitansGame/punchDrunk2.jpg";
import punchDrunk3 from "../../images/enitansGame/punchDrunk3.jpg";
import punchDrunk4 from "../../images/enitansGame/punchDrunk4.jpg";
import punchDrunk5 from "../../images/enitansGame/punchDrunk5.jpg";
import punchDrunk6 from "../../images/enitansGame/punchDrunk6.jpg";
import punchDrunkArtworkMan from "../../images/enitansGame/punchDrunkArtworkMan.JPG";
import punchDrunkArtworkWoman from "../../images/enitansGame/punchDrunkArtworkWoman.JPG";

import zen from "../../images/zen.jpeg";
import zenMountain from "../../images/navBarNewNew.jpg";

const portfolioImages = [
  { id: 1, type: "Costume", src: punchDrunk2 },
  { id: 2, type: "Costume", src: punchDrunk3 },
  { id: 3, type: "Costume", src: punchDrunk4 },
  { id: 4, type: "Set", src: punchDrunk5 },
  { id: 5, type: "Set", src: punchDrunk6 },
  { id: 6, type: "Set", src: punchDrunkArtworkMan },
  { id: 7, type: "Set", src: punchDrunkArtworkWoman }
];

const EnitansGame = () => {
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

export default EnitansGame;
