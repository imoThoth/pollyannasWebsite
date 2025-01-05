import React, { useState } from "react";
import "./sampProj.css"; // Custom CSS
import animal1 from "../../images/Morroccan/208_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal2 from "../../images/Morroccan/212_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal3 from "../../images/Morroccan/244_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal4 from "../../images/Morroccan/271_rbmh_event_design_marrakesh_jma_photography.jpg";
import animal5 from "../../images/Morroccan/moroccoCarousel.jpg";
import animal6 from "../../images/Morroccan/morrocoEvent.jpg";
import animal7 from "../../images/Morroccan/morrocoEvent1.jpg";
import animal8 from "../../images/Morroccan/morrocoEvent2.jpg";
import animal9 from "../../images/Morroccan/morrocoEvent3.jpg";
import animal10 from "../../images/Morroccan/morrocoEvent4.jpg";
import animal11 from "../../images/Morroccan/morrocoEvent5.jpg";
import morrocoEvent6 from "../../images/Morroccan/morrocoEvent6.jpg";
import morrocoEvent7 from "../../images/Morroccan/morrocoEvent7.jpg";
import morrocoEvent8 from "../../images/Morroccan/morrocoEvent8.jpg";
import morrocoEvent9 from "../../images/Morroccan/morrocoEvent9.jpg";

import zenMountain from "../../images/navBarNewNew.jpg";

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


const ImmersiveMorrocan = () => {
  const images = [
    {
      id: 1,
      type: "Costume",
      src: animal10,
      caption: "This is the first image caption",
    },
    {
      id: 2,
      type: "Costume",
      src: morrocoEvent7,
      caption: "A caption for the second image",
    },
    {
      id: 3,
      type: "Costume",
      src: morrocoEvent8,
      caption: "Here is the third costume image",
    },

    {
      id: 6,
      type: "Costume",
      src: animal6,
      caption: "Sixth image with a golden costume",
    },
    {
      id: 7,
      type: "Costume",
      src: animal7,
      caption: "Seventh costume photo for the gallery",
    },
    {
      id: 8,
      type: "Costume",
      src: animal8,
      caption: "Caption for the eighth image",
    },
    {
      id: 9,
      type: "Costume",
      src: animal9,
      caption: "Ninth image in the costume series",
    },
    {
      id: 10,
      type: "Costume",
      src: morrocoEvent6,
      caption: "Tenth and final costume image",
    },
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
        <h1>Immersive 70s Marrakesh</h1>
        <div className="project-header-image">
          <img src={zenMountain} alt="Portfolio Background" />
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

export default ImmersiveMorrocan;
