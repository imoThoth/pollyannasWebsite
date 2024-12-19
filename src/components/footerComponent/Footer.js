import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon
import './footer.css'; // Import custom CSS for additional styles if needed

const Footer = () => {
  return (
    <footer className="footer-custom text-white text-center py-3 mt-auto">
      <div className="row mx-0 w-100">
        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
          <p className="mb-0">© 2024 Pollyanna Elston. All rights reserved.</p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <p className="mb-0">
          <a 
        href="https://www.instagram.com/pollyanna_elston/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ marginLeft: '10px' }} /* Optional: Add a small margin if needed */
      >
          <FaInstagram size={24} color="#fff" /> {/* Adjust size/color as desired */}
      </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
