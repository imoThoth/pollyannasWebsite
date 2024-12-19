import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import oneEightyCarousel from "../../images/oneEighty/180carousel.JPG";
import oneEightyImage from "../../images/oneEighty/image1.png";
import oneEightyImageTwo from "../../images/oneEighty/image2.png";
import oneEightyDay1 from "../../images/oneEighty/180day1.JPG";
import oneEightyDay11 from "../../images/oneEighty/180day1_1.JPG";
import oneEightyDay12 from "../../images/oneEighty/180day1_2.JPG";
import oneEightyDay13 from "../../images/oneEighty/180day1_3.JPG";
import oneEightyDay14 from "../../images/oneEighty/180day1_4.JPG";
import oneEightyDay21 from "../../images/oneEighty/180day2_1.JPG";
import oneEightyDay22 from "../../images/oneEighty/180day2_2.JPG";
import oneEightyDay23 from "../../images/oneEighty/180day2_3.JPG";
import oneEightyDay31 from "../../images/oneEighty/180day3_1.JPG";
import oneEightyDay32 from "../../images/oneEighty/180day3_2.JPG";
import oneEightyDay33 from "../../images/oneEighty/180day3_3.JPG";
import oneEightyDay34 from "../../images/oneEighty/180day3_4.JPG";
import pollyNavbarNewer from "../../images/navBarNewNew.jpg";



const portfolioImages = [
  { id: 1, type: "Costume", src: oneEightyCarousel },
  { id: 2, type: "Costume", src: oneEightyImage },
  { id: 3, type: "Costume", src: oneEightyImageTwo },
  { id: 4, type: "Costume", src: oneEightyDay1 },
  { id: 4, type: "Costume", src: oneEightyDay11 },
  { id: 5, type: "Costume", src: oneEightyDay12 },
  { id: 6, type: "Costume", src: oneEightyDay13 },
  { id: 7, type: "Costume", src: oneEightyDay14 },
  { id: 8, type: "Costume", src: oneEightyDay21 }, 
  { id: 9, type: "Costume", src: oneEightyDay22 },
  { id: 10, type: "Costume", src: oneEightyDay23 },
  { id: 11, type: "Costume", src: oneEightyDay31 },
  { id: 11, type: "Costume", src: oneEightyDay32 },
  { id: 11, type: "Costume", src: oneEightyDay33 },
  { id: 11, type: "Costume", src: oneEightyDay34 }
];

const OneEighty = () => {
  return (
    <div>
      <div>
        <header className="project-full-width-header">
          <h1>Project Name</h1>
          <div className="project-header-image">
            <img src={pollyNavbarNewer} alt="Portfolio Background" />
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

export default OneEighty;
