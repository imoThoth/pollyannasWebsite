import React from 'react';
import pollyanna from "../images/costume.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Ensure this CSS file is still relevant, otherwise you can remove this import
import zenMountain from "../images/galaxy.jpeg"

const About = () => {
    return (
      <div>
        <header className="about-full-width-header">
          <h1>BIO</h1>
          <div className="about-header-image">
            <img src={zenMountain} alt="Portfolio Background" />
          </div>
        </header>

        <div className="custom-container mt-5">
        <div className="row">
          <div className="col-12 text-center">
          </div>
          <div className="col-12 col-lg-8">
            <p>
              asdasdasdas
            </p>
            <p>
              Aliquam purus sit amet luctus venenatis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae purus faucibus ornare suspendisse. Urna neque viverra justo nec ultrices. Eget nulla facilisi etiam dignissim diam quis enim. Id neque aliquam vestibulum morbi blandit cursus. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quam quisque id diam vel quam elementum pulvinar. Nunc lobortis mattis aliquam faucibus purus in massa. Fringilla phasellus faucibus scelerisque eleifend donec. In tellus integer feugiat scelerisque varius morbi enim. Facilisis sed odio morbi quis commodo odio.
            </p>
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