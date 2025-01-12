import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
import "../projects/ProjectStyle.css";
import oneEightyCarousel from "../../images/oneEighty/oneHundredAndEighty1.jpg";
import oneEightySetDesign from "../../images/oneEighty/oneHundredAndEighty2.jpg";
import oneEightydayOne_announcer from "../../images/oneEighty/oneHundredAndEighty3.jpg";
import oneEightyDayOne_barMaid from "../../images/oneEighty/oneHundredAndEighty4.jpg";
import oneEightydayOne_dartsBoard from "../../images/oneEighty/oneHundredAndEighty5.jpg";
import oneEightydayOne_jacket_darts from "../../images/oneEighty/oneHundredAndEighty5.jpg";
import oneEightydayThree_actorsDance from "../../images/oneEighty/oneHundredAndEighty7.jpg";
import actorsTogether from "../../images/oneEighty/oneHundredAndEighty8.jpg";
import oneEightydayThree_fallScene from "../../images/oneEighty/oneHundredAndEighty9.jpg";
import oneEightyDayTwo_standAlone from "../../images/oneEighty/oneHundredAndEighty10.jpg";
import oneEightyDayTwo_standNexToDarts from "../../images/oneEighty/oneHundredAndEighty11.jpg";
import oneEightyDayTwo_throwDarts from "../../images/oneEighty/oneHundredAndEighty12.jpg";
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
    // { id: 2, type: "Costume", src: oneEightyImage,
    //   caption: "This is the first image caption", },
    // { id: 3, type: "Costume", src: oneEightyImageTwo,
    //   caption: "This is the first image caption", },
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
    // { id: 14, type: "Costume", src: oneEightyDayJacket ,
    //   caption: "This is the first image caption",}
  ];
  // Determine best rows x columns for our images
  const [rows, columns] = getBestFactorPair(images.length);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // NEW: isLoading state to show spinner until images are ready
  const [isLoading, setIsLoading] = useState(true);

  // We check if there's an even or odd number of images
  const isEven = images.length % 2 === 0;

  // EFFECT: Wait for all images to load
  useEffect(() => {
    // Create an array of Promises that resolve once each image is loaded
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const imgObj = new Image();
        imgObj.src = image.src;
        imgObj.onload = () => resolve(true);
        imgObj.onerror = (err) => reject(err);
      });
    });

    // Wait until all images are loaded
    Promise.all(loadPromises)
      .then(() => {
        setIsLoading(false); // All images are now loaded
      })
      .catch((err) => {
        console.error("Error loading images:", err);
        setIsLoading(false); // Even if one fails, let's hide the loader
      });
  }, [images]);

  // If we're still loading images, show a spinner
  if (isLoading) {
    return (
      <div className="preloader-container">
        <TailSpin
          height="80"
          width="80"
          color="#ff00ff"
          ariaLabel="loading"
        />
        <p style={{ color: "white", marginTop: "1rem" }}>
          Loading images...
        </p>
      </div>
    );
  }

  /**
   * Opens the modal for the clicked image
   */
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  /**
   * Close the modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Show previous image
   */
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  /**
   * Show next image
   */
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  /**
   * Click outside the modal to close
   */
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // Render the actual content after images are loaded
  return (
    <>
      {/* Header Section */}
      <header className="project-full-width-header">
        <h1>One Hundred and Eighty</h1>
        <div className="project-header-image">
          <img src={pollyNavbarNewer} alt="Portfolio Background" />
        </div>
      </header>

      {/* Masonry Container */}
      <div
        className={`masonry-container ${isEven ? "even" : "odd"}`}
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
        <div
          className="modal-overlay"
          onClick={handleClickOutside}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            <button className="prev-button" onClick={goToPrevious}>
              &#8249;
            </button>

            <img
              src={images[currentIndex].src}
              alt={`Image ${currentIndex + 1}`}
              className="modal-image"
            />

            <p className="modal-caption">
              {images[currentIndex].caption}
            </p>

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
