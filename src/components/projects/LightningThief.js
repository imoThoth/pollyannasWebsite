import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
/* Import images (example with 10) */
import percyjackson1 from "../../images/percyJackson/percy1_L.jpg";
import percyjackson6 from "../../images/percyJackson/percy2_P.jpg";
import percyjackson3 from "../../images/percyJackson/percy3_L.jpg";
import percyjackson4 from "../../images/percyJackson/percy4_P.jpg";
import percyjackson5 from "../../images/percyJackson/percy5_L.jpg";
import percyjackson2 from "../../images/percyJackson/percy6_P.jpg";
import percyjackson7 from "../../images/percyJackson/percy7_L.jpg";
import percyjackson8 from "../../images/percyJackson/percy8_P.jpg";
import percyjackson9 from "../../images/percyJackson/percy9_P.jpg";
import percyjackson10 from "../../images/percyJackson/percy10_P.jpg";
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
  // Try to find the best factor pair with exact factors
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

  // If the number is prime or no exact factors are found, distribute the images
  // with the remainder in its own row
  if (bestPair[0] === 1 || bestPair[1] === 1) {
    const rows = Math.floor(Math.sqrt(num)); // Start with the integer part of the square root
    const cols = Math.ceil(num / rows); // Calculate columns based on rows
    bestPair = [rows, cols];
  }

  return bestPair;
}

const LightningThief = () => {
  // Example images, each with a "caption" property to display in the modal
  const images = [
    {
      id: 1,
      type: "Costume",
      src: percyjackson1,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief - Directed by Anna Fox",
    },
    {
      id: 2,
      type: "Costume",
      src: percyjackson2,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",
    },
    {
      id: 3,
      type: "Costume",
      src: percyjackson3,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",
    },
    {
      id: 4,
      type: "Costume",
      src: percyjackson4,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",
    },
    {
      id: 5,
      type: "Costume",
      src: percyjackson5,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",
    },
    {
      id: 6,
      type: "Costume",
      src: percyjackson6,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",
    },
    {
      id: 7,
      type: "Costume",
      src: percyjackson7,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",
    },
    {
      id: 8,
      type: "Costume",
      src: percyjackson8,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",
    },
    {
      id: 9,
      type: "Costume",
      src: percyjackson9,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief",

      id: 10,
      type: "Costume",
      src: percyjackson10,
      caption: "Costume Design - Students from the Musical Theatre Course at London College of Music in Percy Jackson: The Lightning Thief"
    }
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
         <h1>Lightning Thief</h1>
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

export default LightningThief;
