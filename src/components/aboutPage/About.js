import React from 'react';
import pollyanna from "../../images/pollyannaFace.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import zenMountain from "../../images/navBarNewNew.jpg";
import pollyannaCV from "../../assets/pollyannaElstonPDF.pdf"

const About = () => {
    return (
        <div className="about-page">
            <header className="about-full-width-header">
                <h1>BIO</h1>
                <div className="about-header-image">
                    <img src={zenMountain} alt="Portfolio Background" />
                </div>
            </header>
            <div className="custom-container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <p>
                        Pollyanna Elston is multifaceted Designer and Maker who works across Theatre, Film, Events and Digital Media both in the UK and globally. Originally from the Pembrokeshire Coast in South West Wales she moved
                        to London to study Foundation Art at Camberwell College of Art, and then carried on to graduate from Wimbledon College of Art with a BA in Theatre Design in 2017. She is known for her attention to detail and her
                        bright colourful palettes which have become a trademark across all of her practices. She lives in South West London where she continues her love for cold water swimming in Brockwell Lido, and always wears
                        colourful clothes.
                        </p>
                          {/* Add CV download link, public/pollyannaElstonPDF */}
                          <a
                            href="https://docs.google.com/document/d/19lo8Ue1LkWDvIY0ez45UVP199ehv78QGL-TKi6D1Kdc/edit?tab=t.0" /* Path to the CV file in the public folder */
                            target="_blank" rel="noopener noreferrer"
                            download="pollyannaCV.pdf" /* File name for download */
                            className="cv-download-button"
                        >
                            Download My C.V
                        </a>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mt-4 mt-lg-0">
                        <img src={pollyanna} className="img-fluid" alt="Pollyanna Elston" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
