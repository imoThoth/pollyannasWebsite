import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // 1) Import the spinner from react-loader-spinner
import "./sampProj.css"; // Custom CSS
import hikers1 from "../../images/HitchikerWebsite/hikers1_L.jpg";
import hikers2 from "../../images/HitchikerWebsite/hikers2_P.jpg";
import hikers3 from "../../images/HitchikerWebsite/hikers3_L.jpg";
import hikers4 from "../../images/HitchikerWebsite/hikers4_P.jpg";
import hikers5 from "../../images/HitchikerWebsite/hikers5_L.jpg";
import hikers6 from "../../images/HitchikerWebsite/hikers6_L.jpg";
import hikers7 from "../../images/HitchikerWebsite/hikers7_L.jpg";
import hikers8 from "../../images/HitchikerWebsite/hikers8_P.jpg";
import hikers9 from "../../images/HitchikerWebsite/hikers9_L.jpg";
import hikers10 from "../../images/HitchikerWebsite/hikers10_P.jpg";
import hikers11 from "../../images/HitchikerWebsite/hikers11_L.jpg";
import hikers12 from "../../images/HitchikerWebsite/hikers12.jpg";
import hikers13 from "../../images/HitchikerWebsite/hikers13.jpg";
import hikers14 from "../../images/HitchikerWebsite/hikers14.jpg";
import hikers15 from "../../images/HitchikerWebsite/hikers15.jpg";
import hikers16 from "../../images/HitchikerWebsite/hikers16.jpg";
import hikers17 from "../../images/HitchikerWebsite/hikers17.jpg";
import hikers18 from "../../images/HitchikerWebsite/hikers18.jpg";
import hikers19 from "../../images/HitchikerWebsite/hikers19.jpg";
import hikers20 from "../../images/HitchikerWebsite/hikers20.jpg";





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



const HitchHikers = () => {

  const images = [
    { id: 1, type: "Costume", src: hikers1, caption: "Costume Design/Maker - Immersive Hitchhikers Guide to the Galaxy for private event - Directed by Jack Stigner - Scott Wilson Besgrove as Zaphod", },
    { id: 2, type: "Costume", src: hikers2, caption: "Costume Design/Maker - Mimi Chanel as Slartybartfast, Costume made by Amy Jeskins",  },
    { id: 3, type: "Costume", src: hikers3 , caption: "Costume Design/Maker - Issy Rawbone,Dom Allen,Len Gwyn & Tom Bell as Arthur Dent & Ford Prefect", },
    { id: 4, type: "Costume", src: hikers4, caption: "Costume Design/Maker - Tom Bell as Arthur Dent",  },
    { id: 5, type: "Costume", src: hikers5, caption: "Costume Design/Maker - Scott Wilson Besgrove, Outfit made/ adapted by myself", },
    { id: 6, type: "Costume", src: hikers6, caption: "Costume Design/Maker - Issy Rawbone as Ford Prefect",  },
    { id: 7, type: "Costume", src: hikers7, caption: "Costume Design/Maker - Scott Wilson Besgrove & James Rowland as Zaphod BeebleBrox",  },
    { id: 8, type: "Costume", src: hikers8, caption: "Costume Design/Maker - Mimi Chanel as Slartibartfast, headress made by myself", }, 
    { id: 9, type: "Costume", src: hikers9, caption: "Costume Design/Maker - Scott Wilson Besgrove as Zaphod & Dom Allen as Arthur",  },
    { id: 10, type: "Costume", src: hikers10, caption: "Costume Design/Maker - Scott Wilson Besgrove as Zaphod", },
    { id: 11, type: "Costume", src: hikers11, caption: "Costume Design/Maker - Mimi Chanel, Cinthia Lillen, Rob Smyhtson & Isobel Midnight as Atoms",  },
    { id: 12, type: "Costume", src: hikers12, caption: "Costume Design/Maker - Slartibartfast headress in progress",  },
    { id: 13, type: "Costume", src: hikers13, caption: "Costume Design/Maker - Slartibartfast headress in progres",  },
    { id: 14, type: "Costume", src: hikers14, caption: "Costume Design/Maker - Zaphod's shoes adapted and decorated by myself, filled with biro pens",  },
    { id: 15, type: "Costume", src: hikers15, caption: "Costume Design/Maker - Mimi Chanel, Em Williams, Cynthia Lillen, Paul Carroll & Amelia Parillon",  },
    { id: 16, type: "Costume", src: hikers16, caption: "Costume Design for the Atoms",  },
    { id: 17, type: "Costume", src: hikers17, caption: "Costume Design for Zaphod Beeblebrox",  },
    { id: 18, type: "Costume", src: hikers18, caption: "costume Design for Arthur Dent",  },
    { id: 19, type: "Costume", src: hikers19, caption: "Costume Design for Ford Prefect",  },
    { id: 20, type: "Costume", src: hikers20, caption: "Costume Design for Slartibartfast",  },
  ]


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
         <h1>Immersive Hitchhikers Guide to The Galaxy</h1>
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

export default HitchHikers;
