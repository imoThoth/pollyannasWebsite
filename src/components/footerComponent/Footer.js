import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'; // Import custom CSS for additional styles if needed

const Footer = () => {
  return (
    <footer className="footer-custom text-white text-center py-3 mt-auto">
      <div className="row mx-0 w-100">
        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
          <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <p className="mb-0">
            <a href="/privacy" className="text-white me-2">Privacy Policy</a>
            <a href="/terms" className="text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
