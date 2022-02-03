import { fabClasses } from '@mui/material';
import React, { useState } from 'react'
import './Contacts.scss'

function Contacts() {
const [message ,setMessage]=useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id='contact'>
    <div className='left'>
     <img src={process.env.PUBLIC_URL +'Assets/hands.jpg'}/>
    </div>
    <div className='right'>
      <h2>Contact.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Message'></textarea>
        <button type='submit'>Send</button>
        {message && <span>Thanks , I'll reply ASAP :) </span>}
      </form>
    </div>
    </div>
  )
}

export default Contacts
