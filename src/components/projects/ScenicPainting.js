import React, { useState, useEffect } from 'react';
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
import "./sampProj.css"; // Custom CSS

import zenMountain from "../../images/navBarNewNew.jpg";

import scenic1 from "../../images/scenic/scenicPaiting1.jpg";
import scenic2 from "../../images/scenic/scenicPainting2.jpg";
import scenic3 from "../../images/scenic/scenicPainting3.jpg";
import scenic4 from "../../images/scenic/scenicPainting4.jpg";
import scenic5 from "../../images/scenic/scenicPaiting5.jpg";
import scenic6 from "../../images/scenic/scenicPaiting6.jpg";
import scenic7 from "../../images/scenic/scenicPainting7.jpg";
import scenic8 from "../../images/scenic/scenicPainting8.jpg";
import scenic9 from "../../images/scenic/scenicPainting9.jpg";
import scenic10 from "../../images/scenic/scenicpainting10.jpg";
import scenic11 from "../../images/scenic/scenicpainting11.jpg";
import scenic12 from "../../images/scenic/scenicpainting12.jpg";
import scenic13 from "../../images/scenic/scenicPainting13.jpg";
import scenic14 from "../../images/scenic/scenicPanting14.jpg";
import scenic15 from "../../images/scenic/scenicPainting15.jp";
import scenic16 from "../../images/scenic/scenicPaintning16.jpg";
import scenic17 from "../../images/scenic/scenicPainting17.jpg";
import scenic18 from "../../images/scenic/scenicPainting18.jpg";
import scenic19 from "../../images/scenic/scenicPainting19.jpg";
import scenic20 from "../../images/scenic/scenicPainting20.jpg";
import scenic21 from "../../images/scenic/scenicPainting21.jpg";
import scenic22 from "../../images/scenic/scenicPainting22.jpg";
import scenic23 from "../../images/scenic/scenicPainting23.jpg";
import scenic24 from "../../images/scenic/scenicPainting24.jpg";
import scenic25 from "../../images/scenic/scenicPainting25.jpg";
import scenic26 from "../../images/scenic/scenicPainting26.jpg";
import scenic27 from "../../images/scenic/scenicPainting27.jpg";
import scenic28 from "../../images/scenic/scenicPainting28.jpg";
import scenic29 from "../../images/scenic/scenicPainting29.jpg";
import scenic30 from "../../images/scenic/scenicPainting30.jpg";
import scenic31 from "../../images/scenic/scenicPainting31.jpg";
import scenic32 from "../../images/scenic/scenicPainting32.jpg";
import scenic33 from "../../images/scenic/scenicPainting33.jpg";
import scenic34 from "../../images/scenic/scenicPainting34.jpg";
import scenic35 from "../../images/scenic/scenicPainting35.jpg";
import scenic36 from "../../images/scenic/scenicPainting36.jpg";
import scenic37 from "../../images/scenic/scenicPainting37.jpg";
import scenic38 from "../../images/scenic/scenicPainting38.jpg";
import scenic39 from "../../images/scenic/scenicPainting39.jpg";
import scenic40 from "../../images/scenic/scenicPainting41.jpg";
import scenic41 from "../../images/scenic/scenicPainting41.jpg";
import scenic42 from "../../images/scenic/scenicPainting42.jpg";
import scenic43 from "../../images/scenic/scenicPainting43.jpg";
import scenic44 from "../../images/scenic/scenicPainting44.jpg";
import scenic45 from "../../images/scenic/scenicPainting45.jpg";
import scenic46 from "../../images/scenic/scenicPainting46.jpg";
import scenic47 from "../../images/scenic/scenicPainting47.jpg";
import scenic48 from "../../images/scenic/scenicPainting48.jpg";
import scenic49 from "../../images/scenic/scenicPainting49.jpg";
import scenic50 from "../../images/scenic/scenicPainting50.jpg";
import scenic51 from "../../images/scenic/scenicPainting51.jpg";
import scenic52 from "../../images/scenic/scenicPainting52.jpg";
import scenic53 from "../../images/scenic/scenicPainting53.jpg";
import scenic54 from "../../images/scenic/scenicPainting54.jpg";
import scenic55 from "../../images/scenic/scenicPainting55.jpg";
import scenic56 from "../../images/scenic/scenicPainting56.jpg";
import scenic57 from "../../images/scenic/scenicPainting57.jpg";
import scenic58 from "../../images/scenic/scenicPainting58.jpg";
import scenic59 from "../../images/scenic/scenicPainting59.jpg";
import scenic60 from "../../images/scenic/scenicPainting60.jpg";
import scenic61 from "../../images/scenic/scenicPainting61.jpg";
import scenic62 from "../../images/scenic/scenicPainting62.jpg";



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

const images = [
  { id: 1, type: "scenic", src: scenic1, caption: "abstractPainter" },
  { id: 2, type: "scenic", src: scenic2, caption: "bath" },
  { id: 3, type: "scenic", src: scenic3, caption: "colorAbstract" },
  { id: 4, type: "scenic", src: scenic4, caption: "dilapidated" },
  { id: 5, type: "scenic", src: scenic5, caption: "dilapidatedComplete" },
  { id: 6, type: "scenic", src: scenic6, caption: "dilapidatedZoomed" },
  { id: 7, type: "scenic", src: scenic7, caption: "dilapidatedZoomedDoor" },
  { id: 8, type: "scenic", src: scenic8, caption: "door" },
  { id: 9, type: "scenic", src: scenic9, caption: "entrance" },
  { id: 10, type: "scenic", src: scenic10, caption: "floor" },
  { id: 11, type: "scenic", src: scenic11, caption: "floorHouse" },
  { id: 12, type: "scenic", src: scenic12, caption: "gun" },
  { id: 13, type: "scenic", src: scenic13, caption: "livingRoom" },
  { id: 14, type: "scenic", src: scenic14, caption: "manWoman" },
  { id: 15, type: "scenic", src: scenic15, caption: "nonsense" },
  { id: 16, type: "scenic", src: scenic16, caption: "peopleStaged" },
  { id: 17, type: "scenic", src: scenic17, caption: "rainbowBox" },
  { id: 18, type: "scenic", src: scenic18, caption: "rainbowDoorWall" },
  { id: 19, type: "scenic", src: scenic19, caption: "rainbowZoomed" },
  { id: 20, type: "scenic", src: scenic20, caption: "rainbowZoomedDoor" },
  { id: 21, type: "scenic", src: scenic21, caption: "rainbowDollWallMaking" },
  { id: 22, type: "scenic", src: scenic22, caption: "satDown" },
  { id: 23, type: "scenic", src: scenic23, caption: "scenicTwo" },
  { id: 24, type: "scenic", src: scenic24, caption: "walls" },
  { id: 25, type: "scenic", src: scenic25, caption: "wallsZoomed" },
  { id: 26, type: "scenic", src: scenic26, caption: "window" },
  { id: 27, type: "scenic", src: scenic27, caption: "windowFrame" },
  { id: 28, type: "scenic", src: scenic28, caption: "windowPrepared" },
  { id: 29, type: "scenic", src: scenic29, caption: "windowRoom" },
  { id: 30, type: "scenic", src: scenic30, caption: "women" },
  { id: 31, type: "scenic", src: scenic31, caption: "Elegant Artistic Drawer" },
  { id: 32, type: "scenic", src: scenic32, caption: "Mesmerizing Ocean Waves" },
  { id: 33, type: "scenic", src: scenic33, caption: "Vivid Trees Painting" },
  { id: 34, type: "scenic", src: scenic34, caption: "Radiant Starfish Delight" },
  { id: 35, type: "scenic", src: scenic35, caption: "Majestic Forest Trees" },
  { id: 36, type: "scenic", src: scenic36, caption: "Vintage Pub Painting" },
  { id: 37, type: "scenic", src: scenic37, caption: "Intriguing Steel Accents" },
  { id: 38, type: "scenic", src: scenic38, caption: "Contemporary Steel Masterpiece" },
  { id: 39, type: "scenic", src: scenic39, caption: "Close-Up Pub Artistry" },
  { id: 40, type: "scenic", src: scenic40, caption: "Zoomed-In Pub Bee Art" },
  { id: 41, type: "scenic", src: scenic41, caption: "Painter’s Self-Portrait" },
  { id: 42, type: "scenic", src: scenic42, caption: "Dynamic Waves in Motion" },
  { id: 43, type: "scenic", src: scenic43, caption: "Powerful Crashing Waves" },
  { id: 44, type: "scenic", src: scenic44, caption: "Half-Burnt Artistic Wall" },
  { id: 45, type: "scenic", src: scenic45, caption: "Intricate Pencil Wall Drawing" },
  { id: 46, type: "scenic", src: scenic46, caption: "Dramatic Wave Crash" },
  { id: 47, type: "scenic", src: scenic47, caption: "Charred Wall Texture" },
  { id: 48, type: "scenic", src: scenic48, caption: "Burnt Yet Beautiful Living Room" },
  { id: 49, type: "scenic", src: scenic49, caption: "Fierce Burning Room" },
  { id: 50, type: "scenic", src: scenic50, caption: "Robust Steel Bed Frame Design" },
  { id: 51, type: "scenic", src: scenic51, caption: "Sleek Steel Bed Frame" },
  { id: 52, type: "scenic", src: scenic52, caption: "Charming Gourmet Kitchen" },
  { id: 53, type: "scenic", src: scenic53, caption: "Detailed Cupboard Elegance" },
  { id: 54, type: "scenic", src: scenic54, caption: "Graceful Beautiful Tree" },
  { id: 55, type: "scenic", src: scenic55, caption: "Nature's Acorn Tree" },
  { id: 56, type: "scenic", src: scenic56, caption: "Rustic Acorn Charm" },
  { id: 57, type: "scenic", src: scenic57, caption: "Abstract Steel Artwork" },
  { id: 58, type: "scenic", src: scenic58, caption: "Modern Steel Abstraction" },
  { id: 59, type: "scenic", src: scenic59, caption: "Bold Steel Abstract" },
  { id: 59, type: "scenic", src: scenic60, caption: "Bold Steel Abstract" },
  { id: 59, type: "scenic", src: scenic61, caption: "Bold Steel Abstract" },
  { id: 59, type: "scenic", src: scenic62, caption: "Bold Steel Abstract" },
];

const ScenicPainting = () => {
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
       <h1>Scenic Painting</h1>
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

  export default ScenicPainting;
