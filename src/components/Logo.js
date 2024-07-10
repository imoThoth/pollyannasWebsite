import React from 'react'
import img from '../logo.svg';

const Logo = () => {
  return (
    <div className='logo w-20 h-16'>
        <img src={img} alt='logo' />
    </div>
  )
}

export default Logo;