import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
/* Import images (example with 10) */
import animal1 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss1_L.jpg";
import animal2 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss2_L.jpg";
import animal3 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss3_P.jpg";
import animal4 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss4_L.jpg";
import animal5 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss5_P.jpg";
import animal6 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss6_P.jpg";
import animal8 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss8_P.jpg";
import animal9 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss9_P.jpg";
import animal10 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss10_L.jpg";
import animal11 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss11_L.jpg";
import animal13 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss13_L.jpg";
import animal14 from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss14_L.jpg";


import "./sampProj.css"; // Custom CSS
import zenMountain from "../../images/navBarNewNew.jpg"; // Header bg image

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

const TyrantsKiss = () => {
  // Example images, each with a "caption" property to display in the modal
  const images = [
    {
      id: 1,
      type: "Costume",
      src: animal1,
      caption: "Set and Costume Design - Sam Topper & Jessica Millot in The Tyrants Kiss - Directed by Michael Dray, photo: Jürgen Liebich"
    },
    {
      id: 2,
      type: "Costume",
      src: animal3,
      caption: "Set and Costume Design - Toby Martin in The Tyrants Kiss, photo: Jürgen Liebich",
    },
    {
      id: 3,
      type: "Costume",
      src: animal4,
      caption: "Set and Costume Design - Sam Topper & Jessica Millot & Lottie Bourne in The Tyrants Kiss, photo: Jürgen Liebich ",
    },
    {
      id: 4,
      type: "Costume",
      src: animal5,
      caption: "Set and Costume Design - Sam Topper, Toby Martin & Lottie Bourne, photo: Jürgen Liebich",
    },
    {
      id: 5,
      type: "Costume",
      src: animal8,
      caption: "Set and Costume Design - Jessica Millot, photo: Jürgen Liebich",
    },
    {
      id: 6,
      type: "Costume",
      src: animal9,
      caption: "Set and Costume Design - Toby Martin, photo: Jürgen Liebich",
    },
    {
      id: 7,
      type: "Costume",
      src: animal10,
      caption: "Set and Costume Design - Sam Topper, Jessica Millot & Lottie Bourne, photo: Jürgen Liebich",
    },
    {
      id: 8,
      type: "Costume",
      src: animal11,
      caption: "Set and Costume Design - Sam Topper, Jessica Millot & Lottie Bourne, photo: Jürgen Liebich",
    },
    {
      id: 9,
      type: "Costume",
      src: animal13,
      caption: "Set and Costume Design - Toby Martin, Jessica Millot & Lottie Bourne, photo: Jürgen Liebiche",
    },
    {
      id: 10,
      type: "Costume",
      src: animal14,
      caption: "Set and Costume Design - Jessica Millot, photo: Jürgen Liebich",
    },
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
         <h1>The Tyrants Kiss</h1>
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

export default TyrantsKiss;
