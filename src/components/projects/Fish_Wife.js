import React, { useState } from "react";
import "./sampProj.css"; // Custom CSS
import animal1 from "../../images/fish_wife/Fishwife_Poster.JPG";
import animal2 from "../../images/fish_wife/Fishwife_11.JPG";
import animal3 from "../../images/fish_wife/Fishwife_12.JPG";
import animal4 from "../../images/fish_wife/Fishwife_20.JPG";
import animal5 from "../../images/fish_wife/Fishwife_36.JPG";
import animal6 from "../../images/fish_wife/Fishwife_43.JPG";
import animal7 from "../../images/fish_wife/Fishwife_60.JPG";
import animal8 from "../../images/fish_wife/Fishwife_73.JPG";
import animal9 from "../../images/fish_wife/Fishwife_80.JPG";
import animal12 from "../../images/fish_wife/Fishwife_108.JPG";
import animal11 from "../../images/fish_wife/Fishwife_134.JPG";
import morrocoEvent6 from "../../images/fish_wife/Fishwife_146.JPG";
import morrocoEvent7 from "../../images/fish_wife/Fishwife_182.JPG";
import morrocoEvent8 from "../../images/fish_wife/Fishwife_199.JPG";
import morrocoEvent9 from "../../images/fish_wife/Fishwife_269.JPG";


import zen from "../../images/zen.jpeg";
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

const Fish_Wife = () => {

  const images = [
    { id: 1, type: "Costume", src: animal6, caption: "This is the first image caption", },
    { id: 2, type: "Costume", src: animal1, caption: "This is the first image caption",  },
    { id: 3, type: "Costume", src: animal11 , caption: "This is the first image caption", },
    { id: 4, type: "Costume", src: animal4, caption: "This is the first image caption",  },
    { id: 5, type: "Costume", src: animal5 , caption: "This is the first image caption", },
    { id: 6, type: "Costume", src: animal2, caption: "This is the first image caption",  },
    { id: 7, type: "Costume", src: animal7, caption: "This is the first image caption",  },
    { id: 8, type: "Costume", src: animal8 , caption: "This is the first image caption", }, 
    { id: 9, type: "Costume", src: animal9, caption: "This is the first image caption",  },
    { id: 10, type: "Costume", src: animal12 , caption: "This is the first image caption", },
    { id: 11, type: "Costume", src: animal3, caption: "This is the first image caption",  },
    { id: 12, type: "Costume", src: morrocoEvent6, caption: "This is the first image caption",  },

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
        <h1>Fish Wife</h1>
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

export default Fish_Wife;
