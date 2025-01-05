import React, { useState }  from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "../projects/ProjectStyle.css";
import oneEightyCarousel from "../../images/oneEighty/oneEightyCarousel.jpg";
import oneEightyImage from "../../images/oneEighty/image1.png";
import oneEightyImageTwo from "../../images/oneEighty/image2.png";
import oneEightySetDesign from "../../images/oneEighty/oneEightyday3_setDesign.JPG";
import oneEightydayOne_announcer from "../../images/oneEighty/oneEightydayOne_announcer.JPG";
import oneEightyDayOne_barMaid from "../../images/oneEighty/oneEightyDayOne_barMaid.JPG";
import oneEightydayOne_dartsBoard from "../../images/oneEighty/oneEightydayOne_dartsBoard.JPG";
import oneEightydayOne_jacket_darts from "../../images/oneEighty/oneEightydayOne_jacket_darts.JPG";
import oneEightydayThree_actorsDance from "../../images/oneEighty/oneEightydayThree_actorsDance.JPG";
import actorsTogether from "../../images/oneEighty/oneEightydayThree_actorsTogether.JPG";
import oneEightydayThree_fallScene from "../../images/oneEighty/oneEightydayThree_fallScene.JPG";
import oneEightyDayTwo_standAlone from "../../images/oneEighty/oneEightyDayTwo_standAlone.JPG";
import oneEightyDayTwo_standNexToDarts from "../../images/oneEighty/oneEightyDayTwo_standNexToDarts.JPG";
import oneEightyDayTwo_throwDarts from "../../images/oneEighty/oneEightyDayTwo_throwDarts.JPG";
import oneEightyDayJacket from "../../images/oneEighty/oneEightyJacket.JPG";
import pollyNavbarNewer from "../../images/navBarNewNew.jpg";


/**
 * Finds the factor pair of `num` with the smallest difference 
 * to ensure a "square-like" grid. Returns [rows, columns].
 * 
 * For example:
 * - 10 -> factors (2, 5)
 * - 12 -> factors (3, 4)
 */
function getBestFactorPair(num) {
  let bestPair = [1, num];
  let minDiff = num - 1;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      const factor1 = i;
      const factor2 = num / i;
      const diff = Math.abs(factor2 - factor1);

      if (diff < minDiff) {
        minDiff = diff;
        bestPair = [factor1, factor2];
      }
    }
  }
  return bestPair;
}

const OneEighty = () => {

  const images = [
    { id: 1, type: "Costume", src: oneEightyCarousel,
      caption: "This is the first image caption", },
    { id: 2, type: "Costume", src: oneEightyImage,
      caption: "This is the first image caption", },
    { id: 3, type: "Costume", src: oneEightyImageTwo,
      caption: "This is the first image caption", },
    { id: 4, type: "Costume", src: oneEightySetDesign,
      caption: "This is the first image caption", },
    { id: 4, type: "Costume", src: oneEightydayOne_announcer,
      caption: "This is the first image caption", },
    { id: 5, type: "Costume", src: oneEightyDayOne_barMaid ,
      caption: "This is the first image caption",},
    { id: 6, type: "Costume", src: oneEightydayOne_dartsBoard,
      caption: "This is the first image caption", },
    { id: 7, type: "Costume", src: oneEightydayOne_jacket_darts ,
      caption: "This is the first image caption",},
    { id: 8, type: "Costume", src: oneEightydayThree_actorsDance ,
      caption: "This is the first image caption",}, 
    { id: 9, type: "Costume", src: actorsTogether ,
      caption: "This is the first image caption",},
    { id: 10, type: "Costume", src: oneEightydayThree_fallScene ,
      caption: "This is the first image caption",},
    { id: 11, type: "Costume", src: oneEightyDayTwo_standAlone ,
      caption: "This is the first image caption",},
    { id: 12, type: "Costume", src: oneEightyDayTwo_standNexToDarts ,
      caption: "This is the first image caption",},
    { id: 13, type: "Costume", src: oneEightyDayTwo_throwDarts,
      caption: "This is the first image caption", },
    { id: 14, type: "Costume", src: oneEightyDayJacket ,
      caption: "This is the first image caption",}
  ];
  

  // -- Determine best rows x columns for our images --
  const [rows, columns] = getBestFactorPair(images.length);

  // -- Modal State --
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isEven = images.length % 2 === 0;

  /**
   * Opens the modal and sets the current index to the clicked image
   */
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  /**
   * Closes the modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Shows the previous image in the gallery
   */
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  /**
   * Shows the next image in the gallery
   */
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  /**
   * Click outside the modal to close it (if desired)
   */
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      {/* Header Section */}
      <header className="project-full-width-header">
        <h1>One Hundred and Eighty</h1>
        <div className="project-header-image">
          <img src={pollyNavbarNewer} alt="Portfolio Background" />
        </div>
      </header>

      {/* 
        Masonry Container with dynamic row/col count
        The inline style sets the columns and rows based on best factor pairs.
      */}
      <div
        className={`masonry-container ${isEven ? 'even' : 'odd'}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, auto)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="masonry-item"
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        /* 
          Modal Overlay 
          ------------
          - Covers the screen with a dark background.
          - Clicking on this overlay (except the modal-content area) closes the modal.
        */
        <div
          className="modal-overlay"
          onClick={handleClickOutside}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content">
            {/* Close Button */}
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            {/* Previous Button */}
            <button className="prev-button" onClick={goToPrevious}>
              &#8249;
            </button>

            {/* The main image displayed in the modal */}
            <img
              src={images[currentIndex].src}
              alt={`Image ${currentIndex + 1}`}
              className="modal-image"
            />

            {/* 
              Image Caption 
              -------------
              A simple paragraph to show text associated with the current image.
            */}
            <p className="modal-caption">
              {images[currentIndex].caption}
            </p>

            {/* Next Button */}
            <button className="next-button" onClick={goToNext}>
              &#8250;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OneEighty;
