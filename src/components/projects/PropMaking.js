import React, { useState, useEffect } from 'react';
import { TailSpin } from "react-loader-spinner";
import "./sampProj.css"; // Custom CSS

import zenMountain from "../../images/navBarNewNew.jpg";

import propproject1 from"../../images/props/props1.jpg";
import propproject2 from"../../images/props/props2.jpg";
import propproject3 from"../../images/props/props3.jpg";
import propproject4 from"../../images/props/props4.jpg";
import propproject5 from"../../images/props/props5.jpg";
import propproject6 from"../../images/props/props6.jpg";
import propproject7 from"../../images/props/props7.jpg";
import propproject8 from"../../images/props/props8.jpg";
import propproject9 from"../../images/props/props9.jpg";
import propproject10 from"../../images/props/props10.jpg";
import propproject11 from"../../images/props/props11.jpg";
import propproject12 from"../../images/props/props12.jpg";
import propproject13 from"../../images/props/props13.jpg";
import propproject14 from"../../images/props/props14.jpg";
import propproject15 from"../../images/props/props15.jpg";
import propproject16 from"../../images/props/props16.jpg";
import propproject17 from"../../images/props/props17.jpg";
import propproject18 from"../../images/props/props18.jpg";
import propproject19 from"../../images/props/props19.jpg";
import propproject20 from"../../images/props/props20.jpg";
import propproject21 from"../../images/props/props21.jpg";
import propproject22 from"../../images/props/props22.jpg";
import propproject23 from"../../images/props/props23.jpg";
import propproject24 from"../../images/props/props24.jpg";
import propproject25 from"../../images/props/props25.jpg";
import propproject26 from"../../images/props/props26.jpg";
import propproject27 from"../../images/props/props27.jpg";
import propproject28 from"../../images/props/props28.jpg";
import propproject29 from"../../images/props/props29.jpg";
import propproject30 from"../../images/props/props30.jpg";
import propproject31 from"../../images/props/props31.jpg";
import propproject32 from"../../images/props/props32.jpg";
import propproject33 from"../../images/props/props33.jpg";
import propproject34 from"../../images/props/props34.jpg";
import propproject35 from"../../images/props/props35.jpg";
import propproject36 from"../../images/props/props36.jpg";
import propproject37 from"../../images/props/props37.jpg";
import propproject38 from"../../images/props/props38.jpg";
import propproject39 from"../../images/props/props39.jpg";
import propproject40 from"../../images/props/props40.jpg";
import propproject41 from"../../images/props/props41.jpg";
import propproject42 from"../../images/props/props42.jpg";
import propproject43 from"../../images/props/props43.jpg";
import propproject44 from"../../images/props/props44.jpg";
import propproject45 from"../../images/props/props45.jpg";



const images = [
  { id: 1, type: "Props", src: propproject1, caption: "Mask and Flower Crown made for 'Romeo and Juliet', 2024" },
  { id: 2, type: "Props", src: propproject2, caption: "Floral arches made for 'Romeo and Juliet', 2024" },
  { id: 3, type: "Props", src: propproject3, caption: "Ice cream hat made for 'Dreaming in English', 2024" },
  { id: 4, type: "Props", src: propproject4, caption: "Ice cream hat, 2024" },
  { id: 5, type: "Props", src: propproject5, caption: "head dress for 'The Grotteaux' at Woolwich Works, 2021" },
  { id: 6, type: "Props", src: propproject6, caption: "Captain America Shield, 2024" },
  { id: 7, type: "Props", src: propproject7, caption: "Medusa wig for 'Percy Jackson', 2023" },
  { id: 8, type: "Props", src: propproject8, caption: "Medusa Wig, 2023" },
  { id: 9, type: "Props", src: propproject9, caption: "Carrot Fan for 'The Grotteaux' at Woolwich Works, 2021" },
  { id: 10, type: "Props", src: propproject10, caption: "Roast Potatoes on bustle for 'The Grotteaux' 2021" },
  { id: 11, type: "Props", src: propproject11, caption: "Pig in Blankets, Parnisps, Carrots and Sprouts for 'The Grotteaux, 2021" },
  { id: 12, type: "Props", src: propproject12, caption: "Yorshire Pudding and Peas Bra for 'The Grotteaux, 2021" },
  { id: 13, type: "Props", src: propproject13, caption: "Small doll made for Fish Wife, 2021" },
  { id: 14, type: "Props", src: propproject14, caption: "Another small doll made for 'Fish Wife, 2021" },
  { id: 15, type: "Props", src: propproject15, caption: "Small leather bag made for 'Fish Wife', 2021 " },
  { id: 16, type: "Props", src: propproject16, caption: "Gravestone made for 'SHE', 2020 " },
  { id: 17, type: "Props", src: propproject17, caption: "Grave stone, 2020" },
  { id: 18, type: "Props", src: propproject18, caption: "Boquet made for 'Sappho' at Southwark Playhouse, 2024" },
  { id: 19, type: "Props", src: propproject19, caption: "Machine made for 'The Great Detective', 2018 " },
  { id: 20, type: "Props", src: propproject20, caption: "Close up of Machine, 2018 " },
  { id: 21, type: "Props", src: propproject21, caption: "Fried egg made for 'Slug in the Shoe, 2019" },
  { id: 22, type: "Props", src: propproject22, caption: "Over sized cotton spool made for 'Mouse in the House', 2019" },
  { id: 23, type: "Props", src: propproject23, caption: "Mask made for Juliet in 'Romeo and Juliet', 2018 " },
  { id: 24, type: "Props", src: propproject24, caption: "Another angle of mask, 2018 " },
  { id: 26, type: "Props", src: propproject28, caption: "King Rat Puppet and tail made for 'Dick Whittinton', 2018" },
  { id: 27, type: "Props", src: propproject26, caption: "King Rat Puppet and tail made for 'Dick Whittinton', 2018" },
  { id: 28, type: "Props", src: propproject27, caption: "King Rat Puppet and tail made for 'Dick Whittinton', 2018" },
  { id: 29, type: "Props", src: propproject25, caption: "Black Magic spell book made for 'Park and Reed', 2020" },
  { id: 30, type: "Props", src: propproject29, caption: "Fake Money Stack made for 'Funny Money', Suffolk Summer Theatres, 2018 " },
  { id: 31, type: "Props", src: propproject30, caption: "Absinthe Label made for 'One Hundred and Eighty', 2024" },
  { id: 32, type: "Props", src: propproject31, caption: "Tree made for 'Br'er Cotton' at Theatre 503, 2018}" },
  { id: 33, type: "Props", src: propproject32, caption: "Tree made for 'Br'er Cotton' at Theatre 503, 2018" },
  { id: 34, type: "Props", src: propproject33, caption: "Tree made for 'Br'er Cotton' at Theatre 503, 2018" },
  { id: 35, type: "Props", src: propproject34, caption: "Flag for 'Prisoner of Zenda', 2017 " },
  { id: 36, type: "Props", src: propproject35, caption: "Reverse of flag, 2017 " },
  { id: 37, type: "Props", src: propproject36, caption: "Puppets of 'The Borrowers' made from 'borrowed/recycled' material, 2017 " },
  { id: 38, type: "Props", src: propproject37, caption: "Borrower puppets clothed, 2017" },
  { id: 39, type: "Props", src: propproject38, caption: "'Pod' close up, 2017" },
  { id: 40, type: "Props", src: propproject39, caption: "'Homily' close up, 2017" },
  { id: 41, type: "Props", src: propproject40, caption: "Arietty' close up, 2017" },
  { id: 42, type: "Props", src: propproject41, caption: "Close up of Arietty's shoes" },
  { id: 43, type: "Props", src: propproject42, caption: "Close up of all Borrower shoes, 2017" },
  { id: 44, type: "Props", src: propproject43, caption: "Puppets made from recycled materials for 'The Magic Flute',Westminster Opera Company, 2018" },
  { id: 45, type: "Props", src: propproject44, caption: "Puppets made from recycled materials for 'The Magic Flute',Westminster Opera Company, 2018" },
  { id: 46, type: "Props", src: propproject45, caption: "Puppets made from recycled materials for 'The Magic Flute',Westminster Opera Company, 2018" },

  ]

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


const PropMaking = () => {
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
       <h1>Props Making</h1>
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

  export default PropMaking;
