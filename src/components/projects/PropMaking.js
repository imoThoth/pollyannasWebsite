import React, { useState, useEffect } from 'react';
import { TailSpin } from "react-loader-spinner";
import "./sampProj.css"; // Custom CSS
import styled from 'styled-components';
import dollBlondeClothed from "../../images/props/propsDollBlondeClothed.jpg";
import dollManClothed from "../../images/props/propsDollManClothed.jpg";
import dolls from "../../images/props/propsDolls.jpg";
import dollsClothed from "../../images/props/propsDollsClothed.jpg";
import shoes from "../../images/props/propsShoes.jpg";
import smallShoes from "../../images/props/propsSmallShoe.jpg";
import absinthe from "../../images/props/propsAbsintheLogo.jpg";
import bag from "../../images/props/propsBag.jpg";
import braPearls from "../../images/props/propsBraPearls.jpg";
import carrotFan from "../../images/props/propsCarrotFan.jpg";
import curtain from "../../images/props/propsCurtain.jpg";
import dress from "../../images/props/propsDress.jpg";
import eggs from "../../images/props/propsEggs.jpg";
import featherMask from "../../images/props/propsFeatherMask.jpg";
import featherMaskZoomed from "../../images/props/propsFeatherMaskZoomed.jpg";
import flowers from "../../images/props/propsFlowers.jpg";
import funerals from "../../images/props/propsFuneral.jpg";
import funeralZoom from "../../images/props/propsFuneralZoom.jpg";
import iceCream from "../../images/props/propsIceCream.jpg";
import iceCreamAgain from "../../images/props/propsIceCreamAgain.jpg";
import machineMotherBoard from "../../images/props/propsMachineMotherBoard.jpg";
import machineRadar from "../../images/props/propsMachineRadar.jpg";
import macineRadarZoomed from "../../images/props/propsMachineRadarZoomed.jpg";
import magus from "../../images/props/propsMagus.jpg";
import medusa from "../../images/props/propsMedusa.jpg";
import medusaPerson from "../../images/props/propsMedusaPerson.jpg";
import money from "../../images/props/propsMoney.jpg";
import pearlHair from "../../images/props/propsPearlHair.jpg";
import rat from "../../images/props/propsRat.jpg";
import ratAgain from "../../images/props/propsRat2.jpg";
import zenMountain from "../../images/navBarNewNew.jpg";
import sFlag from "../../images/props/propsSFlag.jpg";
import sShield from "../../images/props/propsShield.jpg";
import star from "../../images/props/propsStar.jpg";
import swimmingCostume from "../../images/props/propsSwimmingCostume.jpg";
import sylkoRope from "../../images/props/propsSylkoRope.jpg";
import treeStage from "../../images/props/propsTreeStage.jpg";
import treeZoomed from "../../images/props/propsTreeZoomed.jpg";
import voodooDoll from "../../images/props/propsVoodooDoll.jpg";
import voodooStick from "../../images/props/propsVoodooStick.jpg";
import propTree from "../../images/props/propTree.jpg";



const images = [
  { id: 1, type: "Props", src: absinthe, caption: "absinthe" },
  { id: 2, type: "Props", src: bag, caption: "bag" },
  { id: 3, type: "Props", src: braPearls, caption: "braPearls" },
  { id: 4, type: "Props", src: carrotFan, caption: "carrotFan" },
  { id: 5, type: "Props", src: curtain, caption: "curtain" },
  { id: 6, type: "Props", src: dress, caption: "dress" },
  { id: 7, type: "Props", src: eggs, caption: "eggs" },
  { id: 8, type: "Props", src: featherMask, caption: "featherMask" },
  { id: 9, type: "Props", src: featherMaskZoomed, caption: "featherMaskZoomed" },
  { id: 10, type: "Props", src: flowers, caption: "flowers" },
  { id: 11, type: "Props", src: funerals, caption: "funerals" },
  { id: 12, type: "Props", src: funeralZoom, caption: "funeralZoom" },
  { id: 13, type: "Props", src: iceCream, caption: "iceCream" },
  { id: 14, type: "Props", src: iceCreamAgain, caption: "iceCreamAgain" },
  { id: 15, type: "Props", src: machineMotherBoard, caption: "machineMotherBoard" },
  { id: 16, type: "Props", src: machineRadar, caption: "machineRadar" },
  { id: 17, type: "Props", src: macineRadarZoomed, caption: "macineRadarZoomed" },
  { id: 18, type: "Props", src: magus, caption: "magus" },
  { id: 19, type: "Props", src: medusa, caption: "medusa" },
  { id: 20, type: "Props", src: medusaPerson, caption: "medusaPerson" },
  { id: 21, type: "Props", src: money, caption: "money" },
  { id: 22, type: "Props", src: pearlHair, caption: "pearlHair" },
  { id: 23, type: "Props", src: rat, caption: "rat" },
  { id: 24, type: "Props", src: ratAgain, caption: "ratAgain" },
  { id: 26, type: "Props", src: sFlag, caption: "sFlag" },
  { id: 27, type: "Props", src: sShield, caption: "sShield" },
  { id: 28, type: "Props", src: star, caption: "star" },
  { id: 29, type: "Props", src: swimmingCostume, caption: "swimmingCostume" },
  { id: 30, type: "Props", src: sylkoRope, caption: "sylkoRope" },
  { id: 31, type: "Props", src: treeStage, caption: "treeStage" },
  { id: 32, type: "Props", src: treeZoomed, caption: "treeZoomed" },
  { id: 33, type: "Props", src: voodooDoll, caption: "voodooDoll" },
  { id: 34, type: "Props", src: voodooStick, caption: "voodooStick" },
  { id: 35, type: "Props", src: propTree, caption: "propTree" },
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
