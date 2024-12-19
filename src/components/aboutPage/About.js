import React from 'react';
import pollyanna from "../../images/pollyannaFace.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import zenMountain from "../../images/navBarNewNew.jpg";

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p>
                            Aliquam purus sit amet luctus venenatis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae purus faucibus ornare suspendisse. Urna neque viverra justo nec ultrices. Eget nulla facilisi etiam dignissim diam quis enim. Id neque aliquam vestibulum morbi blandit cursus.
                        </p>
                          {/* Add CV download link, public/pollyannaElstonPDF */}
                          <a
                            href="/cv.pdf" /* Path to the CV file in the public folder */
                            download="Pollyanna_Elston_CV.pdf" /* File name for download */
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
