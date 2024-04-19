import React from 'react';
import './Contact.css';
import Button from './button';

const Contact = () => {
  return (
  <section>
    <div className='contact-form'>
    <Button/>
    </div>
    <div className='contact-image'>
     <img src='./assests/contact.svg' alt='contact'/>
    </div>
  </section>
  )
}

export default Contact
