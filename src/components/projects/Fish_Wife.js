import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
import "./sampProj.css"; // Custom CSS
import fishwife1 from "../../images/fish_wife/fishWife11_L.jpg";
import fishwife2 from "../../images/fish_wife/fishWife2_P.jpg";
import fishwife3 from "../../images/fish_wife/fishWife3_L.jpg";
import fishwife4 from "../../images/fish_wife/fishWife4_P.jpg";
import fishwife5 from "../../images/fish_wife/fishWife5_P.jpg";
import fishwife6 from "../../images/fish_wife/fishWife6_P.jpg";
import fishwife7 from "../../images/fish_wife/fishWife7_P.jpg";
import fishwife8 from "../../images/fish_wife/fishWife8_L.jpg";
import fishwife9 from "../../images/fish_wife/fishWife9_L.jpg";
import fishwife10 from "../../images/fish_wife/fishWife10_P.jpg";
import fishwife11 from "../../images/fish_wife/fishWife11_L.jpg";
import fishwife12 from "../../images/fish_wife/fishWife12_P.jpg";
//import fishwife13 from "../../images/fish_wife/fishWife13_L.jpg";
import fishwife14 from "../../images/fish_wife/fishWife14_L.jpg";
import fishwife15 from "../../images/fish_wife/fishWife15_P.jpg";
import fishwife16 from "../../images/fish_wife/fishWife16_L.jpg";
import fishwife17 from "../../images/fish_wife/FishWife17_L.jpg";
import fishwife18 from "../../images/fish_wife/fishWife18_L.jpg";
import fishwife19 from "../../images/fish_wife/fishWife19_P.jpg";
import fishwife20 from "../../images/fish_wife/fishWife20_L.jpg";
import fishwife21 from "../../images/fish_wife/fishWife21_P.jpg";




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
    { id: 1, type: "Costume", src: fishwife1, caption: "Production and Costume Design - Fish Wife - Directed by Beth Park, photo: David Gennard", },
    { id: 2, type: "Costume", src: fishwife2, caption: "Production and Costume Design - Scarlett Brookes in Fish Wife, Costume made by: Amanda Richards, Shawl made by: Andrea Elston  photo: David Gennard ",  },
    { id: 3, type: "Costume", src: fishwife3, caption: "Production and Costume Design - Fish Wife, photo: David Gennard", },
    { id: 4, type: "Costume", src: fishwife4, caption: "Production and Costume Design - Scarlett Brookes in Fish Wife, Costume made by: Amanda Richards, Shawl made by: Andrea Elston  photo: David Gennard",  },
    { id: 5, type: "Costume", src: fishwife5 , caption: "Production and Costume Design - Scarlett Brookes in Fish Wife, Costume made by: Amanda Richards, Shawl made by: Andrea Elston  photo: David Gennard", },
    { id: 6, type: "Costume", src: fishwife6, caption: "Production and Costume Design - Fish Wife, photo: David Gennard",  },
    { id: 7, type: "Costume", src: fishwife7, caption: "Production and Costume Design - Fish Wife ",  },
    { id: 8, type: "Costume", src: fishwife8 , caption: "Production and Costume Design - Scarlett Brookes in Fish Wife, photo: David Gennard", }, 
    { id: 9, type: "Costume", src: fishwife9, caption: "Production and Costume Design - Shango Baku in Fish Wife, photo: David Gennard",  },
    { id: 10, type: "Costume", src: fishwife10, caption: "Scarlett Brookes in Fish Wife, photo: David Gennard", },
    { id: 11, type: "Costume", src: fishwife11, caption: "Production and Costume Design - Fish Wife, photo: David Gennard",  },
    { id: 12, type: "Costume", src: fishwife12, caption: "Production and Costume Design - Shango Baku in Fish Wife, photo: David Gennard",  },
    //{ id: 13, type: "Costume", src: fishwife13, caption: "Production and Costume Design - Fish Wife, photo: David Gennard",  },
    { id: 14, type: "Costume", src: fishwife14, caption: "Production and Costume Design - Charles Beaven in Fish Wife, photo: David Gennard",  },
    { id: 15, type: "Costume", src: fishwife15, caption: "Production and Costume Design - Fish Wife, photo: David Gennard",  },
    { id: 16, type: "Costume", src: fishwife16, caption: "Production and Costume Design - Scarlett Brookes in Fish Wife, photo: David Gennard",  },
    { id: 17, type: "Costume", src: fishwife17, caption: "Production and Costume Design - Charles Beaven in Fish Wife, photo: David Gennard",  },
    { id: 18, type: "Costume", src: fishwife18, caption: "Production and Costume Design - Fish Wife, photo: David Gennard",  },
    { id: 19, type: "Costume", src: fishwife19, caption: "Costume Design for Thin Old Man - Fish Wife",  },
    { id: 20, type: "Costume", src: fishwife20, caption: "Costume Design for Cedany - Fish Wife",  },
    { id: 21, type: "Costume", src: fishwife21, caption: "Costume Deisgn for Lir - Fish Wife",  },
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
        <h1>Fish Wife</h1>
        <div className="project-header-image">
          <img src={zenMountain} alt="Portfolio Background" />
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

export default Fish_Wife;
