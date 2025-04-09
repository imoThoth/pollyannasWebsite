import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
/* Import images (example with 10) */
import "./sampProj.css"; // Custom CSS
import twelfthNight1 from "../../images/twelfthNight/twelfthNight1_L.jpg";
import twelfthNight2 from "../../images/twelfthNight/twelfthNight2_P.jpg";
import twelfthNight3 from "../../images/twelfthNight/twelfthNight3_P.jpg";
import twelfthNight4 from "../../images/twelfthNight/twelfthNight4_P.jpg";
import twelfthNight5 from "../../images/twelfthNight/twelfthNight5_L.jpg";
import twelfthNight6 from "../../images/twelfthNight/twelfthNight6_P.jpg";
import twelfthNight7 from "../../images/twelfthNight/twelfthNight7_L.jpg";
import twelfthNight8 from "../../images/twelfthNight/twelfthNight8_P.jpg";
import twelfthNight9 from "../../images/twelfthNight/twelfthNight9_L.jpg";
import twelfthNight10 from "../../images/twelfthNight/twelfthNight10_P.jpg";
import twelfthNight11 from "../../images/twelfthNight/twelfthNight11_P.jpg";
import twelfthNight12 from "../../images/twelfthNight/twelfthNight12_P.jpg";



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
const TwelfthNight = () => {
  // Example images, each with a "caption" property to display in the modal
  const images = [
    {
      id: 1,
      type: "Costume",
      src: twelfthNight1,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night - directed by Alexandra Whiteley ",
    },
    {
      id: 2,
      type: "Costume",
      src: twelfthNight2,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 3,
      type: "Costume",
      src: twelfthNight3,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 4,
      type: "Costume",
      src: twelfthNight4,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 5,
      type: "Costume",
      src: twelfthNight5,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 6,
      type: "Costume",
      src: twelfthNight6,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 7,
      type: "Costume",
      src: twelfthNight7,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 8,
      type: "Costume",
      src: twelfthNight8,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 9,
      type: "Costume",
      src: twelfthNight9,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night, white fringed jackets made my myself,",
    },
    {
      id: 10,
      type: "Costume",
      src: twelfthNight10,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    }, 
    {
      id: 11,
      type: "Costume",
      src: twelfthNight11,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
    },
    {
      id: 12,
      type: "Costume",
      src: twelfthNight12,
      caption: "Costume Design - Students from the Acting Course at London College of Music in Twelfth Night",
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
         <h1>Twelfth Night</h1>
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

export default TwelfthNight;
