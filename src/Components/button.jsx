import './button.css';
import React from 'react';
import { LuMessageSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Button = () => {
  return (
  <>
 <div className='btn'>
        <button className='btn-primary'>
          <span>Message</span>
          <LuMessageSquare className="icon"/>
        </button>
        <button className='btn-secondry'>
          <span> Call</span>
          <IoCallOutline className="icon"/>
        </button>
        <button className='btn-tri'>
          <span> Email</span>
          <MdEmail className="icon"/>
        </button>
  </div>
    <form>
      <div className="form_control">
        <label htmlFor='name'>Name</label>
        <input type="text" name="name"/>
      </div>
      <div className="form_control">
      <label htmlFor='email'>Email</label>
      <input type="email" name="email"/>
      </div>
      <div className="form_control">
      <label htmlFor='Message'>Message</label>
      <textarea type="text" name="Message"/>
      </div>
      <button className='btn-submit'> Submit </button>
    </form>
  </>
  );
}

export default Button;



