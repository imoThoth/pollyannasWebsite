import React, { useEffect, useRef } from 'react';
import audience from "../images/audience.jpeg";
import costume from "../images/costume.jpeg";
import deepThoughtCostume from "../images/deepThoughtCostume.jpeg";
import './Carousel.css';

const Carousel = () => {
  const slideIndex = useRef(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');
      if (slides.length === 0 || dots.length === 0) return;

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex.current = (slideIndex.current + 1 > slides.length) ? 1 : slideIndex.current + 1;

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex.current - 1].style.display = 'block';
      dots[slideIndex.current - 1].className += ' active';
    };

    const timer = setInterval(showSlides, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h2>Automatic Slideshow</h2>
      <p>Change image every 2 seconds:</p>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={audience} style={{ width: '100%' }} alt="Nature" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={costume} style={{ width: '100%' }} alt="Snow" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={deepThoughtCostume} style={{ width: '100%' }} alt="Mountains" />
          <div className="text">Caption Three</div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </>
  )
}

export default Carousel;
