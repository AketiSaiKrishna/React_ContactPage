import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
<div>
    <nav>
    <div className='logo'>
      <img src="/assests/logo.svg" alt="geosastra"/>
    </div>
    <ul className='navlist'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
    </ul>
    </nav>
</div>
  )
}

export default Navigation;
