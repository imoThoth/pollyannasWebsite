import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
 import './TopNav.css';
 import {Link} from 'react-router-dom';

const TopNavigation = () => {

  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {

  }

  return(
     <>
        <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id='myTopnav'>
            <div className='active'>
                <Link to = "/">Home</Link>
            </div>
            <div >
                <Link to ="/projects">Project</Link>
            </div>
            <div >
                <Link to = "/contact">Contact</Link>
            </div>
            <div >
                <Link to ='/about'>About</Link>
            </div>
            <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
 
    </>
  )
   
}

export default TopNavigation