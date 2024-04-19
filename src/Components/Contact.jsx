import React from 'react';
import './Contact.css';
import Button from './button';
import image from '../Components/assests/contact.svg'

const Contact = () => {
  return (
  <section>
    <div className='contact-form'>
    <Button/>
    </div>
    <div className='contact-image'>
     <img src={image} alt='contact'/>
    </div>
  </section>
  )
}

export default Contact
