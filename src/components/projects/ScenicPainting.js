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
//import scenic9 from "../../images/scenic/scenicPainting9.jpg";
import scenic10 from "../../images/scenic/scenicpainting10.jpg";
import scenic11 from "../../images/scenic/scenicpainting11.jpg";
import scenic12 from "../../images/scenic/scenicpainting12.jpg";
import scenic13 from "../../images/scenic/scenicPainting13.jpg";
import scenic14 from "../../images/scenic/scenicPanting14.jpg";
import scenic15 from "../../images/scenic/scenicPainting15.jpg";
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
import scenic38 from "../../images/scenic/scenicPainting39.jpg";
import scenic39 from "../../images/scenic/honk.jpg";
//import scenic40 from "../../images/scenic/scenicPainting41.jpg";
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
  // For fewer than 5 pictures, just use one row.
  if (num < 5) {
    return [1, num];
  }
  
  // Force a row with exactly 5 pictures.
  const cols = 5;
  const rows = Math.ceil(num / cols);
  return [rows, cols];
}


const images = [
  { id: 1, type: "scenic", src: scenic1, caption: "Pub Sign for 'The Boatswains Mate' for Buxton International Festival, 2024" },
  { id: 2, type: "scenic", src: scenic2, caption: "Pub Sign for 'The Boatswains Mate' for Buxton International Festival, 2024" },
  { id: 3, type: "scenic", src: scenic3, caption: "Pub Sign for 'The Boatswains Mate' for Buxton International Festival, 2024" },
  { id: 4, type: "scenic", src: scenic4, caption: "'The Boatswains Mate', Buxton International Festival,photo: Genevieve Girling, 2024" },
  { id: 5, type: "scenic", src: scenic5, caption: "Paint Effect for 'Marie Curie' at Charing Cross Theatre, 2024" },
  { id: 6, type: "scenic", src: scenic6, caption: "Paint Effect for 'Marie Curie' at Charing Cross Theatre, 2024" },
  { id: 7, type: "scenic", src: scenic7, caption: "Paint Effect for 'Marie Curie' at Charing Cross Theatre, 2024" },
  { id: 8, type: "scenic", src: scenic8, caption: "Paint Effect for 'Marie Curie' at Charing Cross Theatre, 2024" },
  //{ id: 9, type: "scenic", src: scenic9, caption: "entrance" },
  { id: 10, type: "scenic", src: scenic10, caption: "Close up of Paint effect on bed frame,'Marie Curie' 2024" },
  { id: 11, type: "scenic", src: scenic11, caption: "Close up of Paint effect on bed frame,'Marie Curie' 2024" },
  { id: 12, type: "scenic", src: scenic12, caption: "Sea floor painted for 'Fun on the Beach', Southwark Playhouse, 2024 " },
  { id: 13, type: "scenic", src: scenic13, caption: "Close up of waves,'Fun on the Beach' 2024" },
  { id: 14, type: "scenic", src: scenic14, caption: "Close up of waves,'Fun on the Beach' 2024" },
  { id: 15, type: "scenic", src: scenic15, caption: "Starfish,'Fun on the Beach, 2024" },
  { id: 16, type: "scenic", src: scenic16, caption: "Set for 'Thea saves her Parents' designed, built and painted by myself, Hounslow Arts Centre, 2021" },
  { id: 17, type: "scenic", src: scenic17, caption: "Set for 'Thea saves her Parents' designed, built and painted by myself, Hounslow Arts Centre, 2021" },
  { id: 18, type: "scenic", src: scenic18, caption: "'Thea saves her Parents' all bulit and made from recyled materials, 2021" },
  { id: 19, type: "scenic", src: scenic19, caption: "Trees for 'Red Riding Hood', Houslow Arts Centre, 2020;" },
  { id: 20, type: "scenic", src: scenic20, caption: "Pine Boughs and Pine cones, 'Red Riding Hood', 2020" },
  { id: 21, type: "scenic", src: scenic21, caption: "Close up of Pine cones, 'Red Riding Hood', 2020" },
  { id: 22, type: "scenic", src: scenic22, caption: "Painting the Trees,'Red Riding Hood', 2020 " },
  { id: 23, type: "scenic", src: scenic23, caption: "Trees in Progress,'Red Riding Hood', 2020" },
  { id: 24, type: "scenic", src: scenic24, caption: "Close up of glittery tree, 'Red Riding Hood', 2020" },
  { id: 25, type: "scenic", src: scenic25, caption: "'Red Riding Hood',Hounslow Art Centre, 2020" },
  { id: 26, type: "scenic", src: scenic26, caption: "Burnt down room for 'Lockdown Town', One Night Records, 2020" },
  { id: 27, type: "scenic", src: scenic27, caption: "Closer view of burnt down room for 'Lockdown Town', One Night Records, 2020" },
  { id: 28, type: "scenic", src: scenic28, caption: "Burnt down room with burnt props and setdressing for 'Lockdown Town', One Night Records, 2020" },
  { id: 29, type: "scenic", src: scenic29, caption: "Set for Joyce, Edinburgh Fringe, 2019" },
  { id: 30, type: "scenic", src: scenic30, caption: "Close up, Joyce, 2019 " },
  { id: 31, type: "scenic", src: scenic31, caption: "Close up Joyce, 2019" },
  { id: 32, type: "scenic", src: scenic32, caption: "Box, 'Joyce', 2019" },
  { id: 33, type: "scenic", src: scenic33, caption: "Finished set complete with books,'Joyce' 2019" },
  { id: 34, type: "scenic", src: scenic34, caption: "Reverse of Rainbow, Line drawing, Joyce, 2019" },
  { id: 35, type: "scenic", src: scenic35, caption: "Close up of Line Drawing,'Joyce',2019" },
  { id: 36, type: "scenic", src: scenic36, caption: "Close up of Barn wall for 'Honk' Hounslow Art Centre & UK Tour, 2019" },
  { id: 37, type: "scenic", src: scenic37, caption: "Close up of Barn wall for 'Honk' Hounslow Art Centre & UK Tour, 2019" },
  { id: 38, type: "scenic", src: scenic38, caption: "Barn Wall completed with corrugated roof, and bull rushes, made by me,'Honk', 2019"},
  { id: 39, type: "scenic", src: scenic39, caption: "'Honk', UK Tour, photo: Nick Rutter, 2019" },
 // { id: 40, type: "scenic", src: scenic40, caption: "Zoomed-In Pub Bee Art" },
  { id: 41, type: "scenic", src: scenic41, caption: "'Prisoner of Zenda', Suffolk Summer Theatre, 2017" },
  { id: 42, type: "scenic", src: scenic42, caption: "Jeeves & Wooster- Perfect Nonsense', Suffolk Summer Theatre, 2018" },
  { id: 43, type: "scenic", src: scenic43, caption: "Jeeves & Wooster- Perfect Nonsense', Suffolk Summer Theatre, 2018" },
  { id: 44, type: "scenic", src: scenic44, caption: "Train for 'The 39 Steps', Suffolk Summer Theatre, 2016" },
  { id: 45, type: "scenic", src: scenic45, caption: "'The 39 Steps', Suffolk Summer Theatre, 2016" },
  { id: 46, type: "scenic", src: scenic46, caption: "'The 39 Steps', Suffolk Summer Theatre, 2016" },
  { id: 47, type: "scenic", src: scenic47, caption: "Set for 'Body Language', 2019" },
  { id: 48, type: "scenic", src: scenic48, caption: "Brick wall for 'Murder Weapon' Suffolk Summer Theatre, 2017" },
  { id: 49, type: "scenic", src: scenic49, caption: "Close up of wall, 'Murder Weapon', 2017" },
  { id: 50, type: "scenic", src: scenic50, caption: "Stain Glass window preparation, 'Murder Weapon', 2017" },
  { id: 51, type: "scenic", src: scenic51, caption: "Flooring in Progress, 'Murder Weapon', 2017" },
  { id: 52, type: "scenic", src: scenic52, caption: "Flooring completed, 'Murder Weapon',2017" },
  { id: 53, type: "scenic", src: scenic53, caption: "Finsihed Set in Lighting 'Murder Weapon' Suffolk Summer Theatre, 2017" },
  { id: 54, type: "scenic", src: scenic54, caption: "Copy of 'Battle of Germany' - Paul Nash for 'The Man Upstairs',Suffolk Summer Theatre, 2017 " },
  { id: 55, type: "scenic", src: scenic55, caption: "'The Man Upstairs', Suffolk Summer Theatre, 2017 " },
  { id: 56, type: "scenic", src: scenic56, caption: "'The Man Upstairs', Suffolk Summer Theatre, 2017 " },
  { id: 57, type: "scenic", src: scenic57, caption: "Stained Glass Window for 'The Old Country' Suffolk Summer Theatre, 2016" },
  { id: 58, type: "scenic", src: scenic58, caption: " Trees and Set painted for 'The Old Country' Costume: Miri Birch, 2016 " },
  { id: 59, type: "scenic", src: scenic59, caption: "Trees and Set painted for 'The Old Country' Costume: Miri Birch, 2016" },
  { id: 60, type: "scenic", src: scenic60, caption: "Stained glass window in progress for 'Funny Money, 2018" },
  { id: 61, type: "scenic", src: scenic61, caption: "Abstract painting for 'Funny Money', Suffolk Summer Theatre, 2018" },
  { id: 62, type: "scenic", src: scenic62, caption: "Set for 'Don't Dress For Dinner' Costume: Miri Birch, Suffolk Summer Theatre, 2016" },
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
