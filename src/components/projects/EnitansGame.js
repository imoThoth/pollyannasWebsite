import React, {useState} from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "./sampProj.css"; // Custom CSS
import punchDrunkTelephone from "../../images/enitansGame/punchDrunkTelephone.jpg";
import punchDrunkManStyle from "../../images/enitansGame/punchDrunkManStyle.JPG";
import punchDrunkMain from "../../images/enitansGame/punchDrunkMain.jpg";
import punchDrunkjacketStyle from "../../images/enitansGame/punchDrunkjacketStyle.JPG";
import punchDrunkJacket from "../../images/enitansGame/punchDrunkJacket.jpg";
import punchDrunkCarousel from "../../images/enitansGame/punchDrunkCarousel.jpg";
import punchDrunkActorSpeak from "../../images/enitansGame/punchDrunkActorSpeak.jpg";
import punchDrunkActorLooks from "../../images/enitansGame/punchDrunkActorLooks.jpg";
import punchDrunkActor from "../../images/enitansGame/punchDrunkActor.jpg";
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


const EnitansGame = () => {

  const images = [
    { id: 1, type: "Costume", src: punchDrunkTelephone, caption: "This is the first image caption"},
    { id: 2, type: "Set", src: punchDrunkCarousel, caption: "This is the first image caption" },
    { id: 3, type: "Costume", src: punchDrunkMain, caption: "This is the first image caption" },
    { id: 4, type: "Set", src: punchDrunkjacketStyle , caption: "This is the first image caption"},
    { id: 5, type: "Set", src: punchDrunkJacket , caption: "This is the first image caption"},
    { id: 6, type: "Costume", src: punchDrunkManStyle, caption: "This is the first image caption" },
    { id: 7, type: "Set", src: punchDrunkActorSpeak, caption: "This is the first image caption" },
    { id: 8, type: "Set", src: punchDrunkActorLooks , caption: "This is the first image caption"},
    { id: 9, type: "Set", src: punchDrunkActor , caption: "This is the first image caption"},
  
  ];

  
   // -- Determine best rows x columns for our images --
   const [rows, columns] = getBestFactorPair(images.length);

   // -- Modal State --
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentIndex, setCurrentIndex] = useState(0);
 
   const isEven = images.length % 2 === 0;
 
   /**
    * Opens the modal and sets the current index to the clicked image
    */
   const openModal = (index) => {
     setCurrentIndex(index);
     setIsModalOpen(true);
   };
 
   /**
    * Closes the modal
    */
   const closeModal = () => {
     setIsModalOpen(false);
   };
 
   /**
    * Shows the previous image in the gallery
    */
   const goToPrevious = () => {
     setCurrentIndex((prevIndex) =>
       prevIndex === 0 ? images.length - 1 : prevIndex - 1
     );
   };
 
   /**
    * Shows the next image in the gallery
    */
   const goToNext = () => {
     setCurrentIndex((prevIndex) =>
       prevIndex === images.length - 1 ? 0 : prevIndex + 1
     );
   };
 
   /**
    * Click outside the modal to close it (if desired)
    */
   const handleClickOutside = (e) => {
     if (e.target.classList.contains("modal-overlay")) {
       closeModal();
     }
   };
 
   return (
     <>
       {/* Header Section */}
       <header className="project-full-width-header">
         <h1>Enitans Game</h1>
         <div className="project-header-image">
           <img src={zenMountain} alt="Portfolio Background" />
         </div>
       </header>
 
       {/* 
         Masonry Container with dynamic row/col count
         The inline style sets the columns and rows based on best factor pairs.
       */}
       <div
         className={`masonry-container ${isEven ? 'even' : 'odd'}`}
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
         /* 
           Modal Overlay 
           ------------
           - Covers the screen with a dark background.
           - Clicking on this overlay (except the modal-content area) closes the modal.
         */
         <div
           className="modal-overlay"
           onClick={handleClickOutside}
           role="dialog"
           aria-modal="true"
         >
           <div className="modal-content">
             {/* Close Button */}
             <button className="close-button" onClick={closeModal}>
               &times;
             </button>
 
             {/* Previous Button */}
             <button className="prev-button" onClick={goToPrevious}>
               &#8249;
             </button>
 
             {/* The main image displayed in the modal */}
             <img
               src={images[currentIndex].src}
               alt={`Image ${currentIndex + 1}`}
               className="modal-image"
             />
 
             {/* 
               Image Caption 
               -------------
               A simple paragraph to show text associated with the current image.
             */}
             <p className="modal-caption">
               {images[currentIndex].caption}
             </p>
 
             {/* Next Button */}
             <button className="next-button" onClick={goToNext}>
               &#8250;
             </button>
           </div>
         </div>
       )}
     </>
   );
};

export default EnitansGame;
