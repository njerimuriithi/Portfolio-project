import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return <div className='Nav'>
    
      <ul>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
              <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
              <Link to='/testimonials'>Testimonials</Link>
          </li>
          
      </ul>
  </div>;
}

export default Navbar;
