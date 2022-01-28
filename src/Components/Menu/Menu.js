import React from 'react';
import './Menu.scss'
function Menu({menuOpen,setMenuOpen }) {
    //accept props from appjs of menuopen 
    const openListHandler= () =>{
        setMenuOpen(false)
    }
  return <div className ={"menu" +(menuOpen && "active")} >
      <ul>
          <li onClick={openListHandler} >
              <a href="#intro">Intro</a>

          </li>
          <li onClick={openListHandler}>
              <a href="#Works">Works</a>
              
          </li>
          <li onClick={openListHandler}>
              <a href="#Testimonials">Testimonials</a>
              
          </li>
          <li onClick={openListHandler}>
              <a href="#intro">Intro</a>
              
          </li>
      </ul>
  </div>;
}

export default Menu;
