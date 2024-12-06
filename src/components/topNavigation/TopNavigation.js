import React, { useState } from 'react';
import './TopNav.css';
import { Link } from 'react-router-dom';

const TopNavigation = () => {
    // State to control whether the navbar is visible or not
    const [showNavbar, setShowNavbar] = useState(false);

    // Function to toggle the visibility of the navbar
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="logo">
             <Link to="/">
                <h1>Pollyanna Elston</h1>
             </Link>   
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                {/* FontAwesome icon for the menu button */}
                <i className="fa fa-bars"></i>
            </div>
            <div className={`nav-elements ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNavigation;
