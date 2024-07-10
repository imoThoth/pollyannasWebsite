import React from 'react';
import pollyanna from "../images/costume.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Ensure this CSS file is still relevant, otherwise you can remove this import

const About = () => {
    return (
      <div className="custom-container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>BIOGRAPHY</h1>
            <hr />
          </div>
          <div className="col-12 col-lg-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet. Molestie a iaculis at erat pellentesque adipiscing. Varius sit amet mattis vulputate enim. Sapien faucibus et molestie ac feugiat sed. Et tortor consequat id porta. Habitant morbi tristique senectus et netus et malesuada fames ac. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Mi proin sed libero enim sed faucibus. Sagittis vitae et leo duis ut diam quam nulla. Facilisis sed odio morbi quis. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Nascetur ridiculus mus mauris vitae ultricies leo integer. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Odio euismod lacinia at quis risus sed vulputate. Dictumst quisque sagittis purus sit amet.
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
    );
  };
  
  export default About;