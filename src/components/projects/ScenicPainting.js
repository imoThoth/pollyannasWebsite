import React, { useState, useEffect } from 'react';
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
import styled from 'styled-components';
import abstractPainter from "../../images/scenic/scenicAbstractPainting.jpg";
import bath from "../../images/scenic/scenicBath.jpg";
import colorAbstract from "../../images/scenic/scenicColorAbstract.jpg";
import dilapidated from "../../images/scenic/scenicDilapidated.jpg";
import dilapidatedComplete from "../../images/scenic/scenicDilapidatedComplete.jpg";
import dilapidatedZoomed from "../../images/scenic/scenicDilapidatedZoomed.jpg";
import dilapidatedZoomedDoor from "../../images/scenic/scenicDilapidatedZoomedDoor.jpg";
import door from "../../images/scenic/scenicDoor.jpg";
import entrance from "../../images/scenic/scenicEntranc.jpg";
import floor from "../../images/scenic/scenicFloor.jpg";
import floorHouse from "../../images/scenic/scenicFloorHouse.jpg";
import gun from "../../images/scenic/scenicGun.jpg";
import livingRoom from "../../images/scenic/scenicLivingRoom.jpg";
import manWoman from "../../images/scenic/scenicManWoman.jpg";
import nonsense from "../../images/scenic/scenicNonsence.jpg";
import peopleStaged from "../../images/scenic/scenicPeopleStaged.jpg";
import rainbowBox from "../../images/scenic/scenicRainbowBox.jpg";
import rainbowDoorWall from "../../images/scenic/scenicRainbowDoorWall.jpg";
import rainbowZoomed from "../../images/scenic/scenicRainbowZoomed.jpg";
import rainbowZoomedDoor from "../../images/scenic/scenicRainbowZoomedDoor.jpg";
import rainbowDollWallMaking from "../../images/scenic/scenicRaindowDollWallMaking.jpg";
import satDown from "../../images/scenic/scenicSatDown.jpg";
import scenicTwo from "../../images/scenic/scenicTwo.jpg";
import walls from "../../images/scenic/scenicWalls.jpg";
import wallsZoomed from "../../images/scenic/scenicWallsZoomed.jpg";
import window from "../../images/scenic/scenicWindow.jpg";
import windowFrame from "../../images/scenic/scenicWindowFrame.jpg";
import windowPrepared from "../../images/scenic/scenicWindowPrepared.jpg";
import windowRoom from "../../images/scenic/scenicWindowRoom.jpg";
import women from "../../images/scenic/scenicWomen.jpg";
import zenMountain from "../../images/navBarNewNew.jpg";
import beautfiulDrawer from "../../images/scenic/sceniecBeautifulDrawer.jpg";
import waves from "../../images/scenic/scenicWaves.jpg";
import tressPainting from "../../images/scenic/scenicTreesPaiting.jpg";
import starFish from "../../images/scenic/scenicStarFish.jpg";
import trees from "../../images/scenic/sceneicTrees.jpg";
import paintingPub from "../../images/scenic/scenicPaitingPub.jpg";
import paintingMoreStell from "../../images/scenic/scenicPaitingMoreStell.jpg";
import paintingMoreSteel from "../../images/scenic/scenicPaitingMoreSteel.jpg";
import paintingPubZoomed from "../../images/scenic/scenicPaintingPubZoomed.jpg";
import paintingPubBeeZoomed from "../../images/scenic/scenicPaintingPubBeeZoomed.jpg";
import painterPainting from "../../images/scenic/scenicPainterPainting.jpg";
import moreWaves from "../../images/scenic/scenicMoreWaves.jpg";
import moreCrashingWaves from "../../images/scenic/scenicMoreCrashingWaves.jpg";
import halfBurntWall from "../../images/scenic/scenicHalfBurntWall.jpg";
import drawnPencilWall from "../../images/scenic/scenicDrawnPencilWall.jpg";
import crashingWaves from "../../images/scenic/scenicCrashingWaves.jpg";
import burntWAll from "../../images/scenic/scenicBurntWall.jpg";
import burntLivingRoom from "../../images/scenic/scenicBurntLivingRoom.jpg";
import burningRooom from "../../images/scenic/scenicBurningRoom.jpg";
import bedFrameSteelMore from "../../images/scenic/scenicBedFrameSteelMore.jpg";
import bedFrameSteel from "../../images/scenic/scenicBedFrameSteel.jpg";
import beautifulKitchen from "../../images/scenic/scenicBeautifulKitchen.jpg";
import beautifulCupboardZoomed from "../../images/scenic/scenicBeautifulCupboardZoomed.jpg";
import beautfifulTree from "../../images/scenic/scenicBeautfiulTree.jpg";
import acornTree from "../../images/scenic/scenicAcornTrees.jpg";
import acorn from "../../images/scenic/scenicAcorns.jpg";
import abstractStellPicture from "../../images/scenic/scenicAbstractStellPicture.jpg";
import abstractStellPic from "../../images/scenic/scenicAbstractStellPic.jpg";
import abstractStell from "../../images/scenic/scenicAbstractStell.jpg";


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
  { id: 1, type: "scenic", src: abstractPainter, caption: "abstractPainter" },
  { id: 2, type: "scenic", src: bath, caption: "bath" },
  { id: 3, type: "scenic", src: colorAbstract, caption: "colorAbstract" },
  { id: 4, type: "scenic", src: dilapidated, caption: "dilapidated" },
  { id: 5, type: "scenic", src: dilapidatedComplete, caption: "dilapidatedComplete" },
  { id: 6, type: "scenic", src: dilapidatedZoomed, caption: "dilapidatedZoomed" },
  { id: 7, type: "scenic", src: dilapidatedZoomedDoor, caption: "dilapidatedZoomedDoor" },
  { id: 8, type: "scenic", src: door, caption: "door" },
  { id: 9, type: "scenic", src: entrance, caption: "entrance" },
  { id: 10, type: "scenic", src: floor, caption: "floor" },
  { id: 11, type: "scenic", src: floorHouse, caption: "floorHouse" },
  { id: 12, type: "scenic", src: gun, caption: "gun" },
  { id: 13, type: "scenic", src: livingRoom, caption: "livingRoom" },
  { id: 14, type: "scenic", src: manWoman, caption: "manWoman" },
  { id: 15, type: "scenic", src: nonsense, caption: "nonsense" },
  { id: 16, type: "scenic", src: peopleStaged, caption: "peopleStaged" },
  { id: 17, type: "scenic", src: rainbowBox, caption: "rainbowBox" },
  { id: 18, type: "scenic", src: rainbowDoorWall, caption: "rainbowDoorWall" },
  { id: 19, type: "scenic", src: rainbowZoomed, caption: "rainbowZoomed" },
  { id: 20, type: "scenic", src: rainbowZoomedDoor, caption: "rainbowZoomedDoor" },
  { id: 21, type: "scenic", src: rainbowDollWallMaking, caption: "rainbowDollWallMaking" },
  { id: 22, type: "scenic", src: satDown, caption: "satDown" },
  { id: 23, type: "scenic", src: scenicTwo, caption: "scenicTwo" },
  { id: 24, type: "scenic", src: walls, caption: "walls" },
  { id: 25, type: "scenic", src: wallsZoomed, caption: "wallsZoomed" },
  { id: 26, type: "scenic", src: window, caption: "window" },
  { id: 27, type: "scenic", src: windowFrame, caption: "windowFrame" },
  { id: 28, type: "scenic", src: windowPrepared, caption: "windowPrepared" },
  { id: 29, type: "scenic", src: windowRoom, caption: "windowRoom" },
  { id: 30, type: "scenic", src: women, caption: "women" },
  { id: 31, type: "scenic", src: beautfiulDrawer, caption: "Elegant Artistic Drawer" },
  { id: 32, type: "scenic", src: waves, caption: "Mesmerizing Ocean Waves" },
  { id: 33, type: "scenic", src: tressPainting, caption: "Vivid Trees Painting" },
  { id: 34, type: "scenic", src: starFish, caption: "Radiant Starfish Delight" },
  { id: 35, type: "scenic", src: trees, caption: "Majestic Forest Trees" },
  { id: 36, type: "scenic", src: paintingPub, caption: "Vintage Pub Painting" },
  { id: 37, type: "scenic", src: paintingMoreStell, caption: "Intriguing Steel Accents" },
  { id: 38, type: "scenic", src: paintingMoreSteel, caption: "Contemporary Steel Masterpiece" },
  { id: 39, type: "scenic", src: paintingPubZoomed, caption: "Close-Up Pub Artistry" },
  { id: 40, type: "scenic", src: paintingPubBeeZoomed, caption: "Zoomed-In Pub Bee Art" },
  { id: 41, type: "scenic", src: painterPainting, caption: "Painter’s Self-Portrait" },
  { id: 42, type: "scenic", src: moreWaves, caption: "Dynamic Waves in Motion" },
  { id: 43, type: "scenic", src: moreCrashingWaves, caption: "Powerful Crashing Waves" },
  { id: 44, type: "scenic", src: halfBurntWall, caption: "Half-Burnt Artistic Wall" },
  { id: 45, type: "scenic", src: drawnPencilWall, caption: "Intricate Pencil Wall Drawing" },
  { id: 46, type: "scenic", src: crashingWaves, caption: "Dramatic Wave Crash" },
  { id: 47, type: "scenic", src: burntWAll, caption: "Charred Wall Texture" },
  { id: 48, type: "scenic", src: burntLivingRoom, caption: "Burnt Yet Beautiful Living Room" },
  { id: 49, type: "scenic", src: burningRooom, caption: "Fierce Burning Room" },
  { id: 50, type: "scenic", src: bedFrameSteelMore, caption: "Robust Steel Bed Frame Design" },
  { id: 51, type: "scenic", src: bedFrameSteel, caption: "Sleek Steel Bed Frame" },
  { id: 52, type: "scenic", src: beautifulKitchen, caption: "Charming Gourmet Kitchen" },
  { id: 53, type: "scenic", src: beautifulCupboardZoomed, caption: "Detailed Cupboard Elegance" },
  { id: 54, type: "scenic", src: beautfifulTree, caption: "Graceful Beautiful Tree" },
  { id: 55, type: "scenic", src: acornTree, caption: "Nature's Acorn Tree" },
  { id: 56, type: "scenic", src: acorn, caption: "Rustic Acorn Charm" },
  { id: 57, type: "scenic", src: abstractStellPicture, caption: "Abstract Steel Artwork" },
  { id: 58, type: "scenic", src: abstractStellPic, caption: "Modern Steel Abstraction" },
  { id: 59, type: "scenic", src: abstractStell, caption: "Bold Steel Abstract" }
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
