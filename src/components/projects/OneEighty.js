import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
import "../projects/ProjectStyle.css";
import oneEighty1 from "../../images/oneEighty/oneHundredAndEighty1.jpg";
import oneEighty2 from "../../images/oneEighty/oneHundredAndEighty2.jpg";
import oneEighty3 from "../../images/oneEighty/oneHundredAndEighty3.jpg";
import oneEighty4 from "../../images/oneEighty/oneHundredAndEighty4.jpg";
import oneEighty5 from "../../images/oneEighty/oneHundredAndEighty5.jpg";
import oneEighty6 from "../../images/oneEighty/oneHundredAndEighty6.jpg";
import oneEighty7 from "../../images/oneEighty/oneHundredAndEighty7.jpg";
import oneEighty8 from "../../images/oneEighty/oneHundredAndEighty8.jpg";
import oneEighty9 from "../../images/oneEighty/oneHundredAndEighty9.jpg";
import oneEighty10 from "../../images/oneEighty/oneHundredAndEighty10.jpg";
import oneEighty11 from "../../images/oneEighty/oneHundredAndEighty11.jpg";
import oneEighty12 from "../../images/oneEighty/oneHundredAndEighty12.jpg";
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


    { id: 1, type: "Costume", src: oneEighty1, caption: "Costume and Production Design - Lara Peake in One Hundred and Eighty - Directed by Patrick Crellin, photo: Catherine Frawley", },
    { id: 2, type: "Costume", src: oneEighty2, caption: "Costume and Production Design - Isis Hainsworth & Lara Peake in One Hundred and Eighty, photo: Catherine Frawley", },
    { id: 3, type: "Costume", src: oneEighty3, caption: "Costume and Production Design - Isis Hainsworth & Lara Peake in One Hundred and Eighty, photo: Catherine Frawley",},
    { id: 4, type: "Costume", src: oneEighty4, caption: "Costume and Production Design - One Hundred and Eighty, photo: Catherine Frawley", },
    { id: 5, type: "Costume", src: oneEighty5, caption: "Costume and Production Design - Isis Hainsworth & Lara Peake in One Hundred and Eighty, photo: Catherine Frawley",},
    { id: 6, type: "Costume", src: oneEighty6, caption: "Costume and Production Design - Isis Hainsworth & Lara Peake in One Hundred and Eighty, photo: Catherine Frawley",},
    { id: 7, type: "Costume", src: oneEighty7, caption: "Costume and Production Design - Lara Peake in One Hundred and Eighty, sparkly jacket made by myself, photo: Catherine Frawley",}, 
    { id: 8, type: "Costume", src: oneEighty8, caption: "Costume and Production Design - Nigel Barrett in One Hundred and Eighty, photo: Catherine Frawley",},
    { id: 9, type: "Costume", src: oneEighty9, caption: "Costume and Production Design - Isis Hainsworth in One Hundred and Eighty, photo: Catherine Frawley",},
    { id: 10, type: "Costume", src: oneEighty10, caption: "Costume and Production Design - Isis Hainsworth in One Hundred and Eighty, photo: Catherine Frawley",},
    { id: 11, type: "Costume", src: oneEighty11, caption: "Costume and Production Design - Isis Hainsworth in One Hundred and Eighty, photo: Catherine Frawley",},
    { id: 12, type: "Costume", src: oneEighty12, caption:  "Costume and Production Design - Isis Hainsworth & Lara Peake in One Hundred and Eighty, photo: Catherine Frawley", },
    // { id: 14, type: "Costume", src: oneEightyDayJacket , caption: "This is the first image caption",}
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
