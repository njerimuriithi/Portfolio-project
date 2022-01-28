import React from 'react'
import   "./topBar.scss"
//import {PersonIcon,EmailIcon} from '@mui/icons-material';


function TopBar({menuOpen,setMenuOpen}) {
  const menuOpenHandler = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="leftcontents">
        <div className="logo">NjeriMuriithi</div>
        <div className="itemContainer">
         
          <span>+254 717 331 872</span>
        </div>
      
        <div className="itemContainer">
              
          <span>nmuriithi58@gmail.com</span>
        </div>
        </div>
        {/*Hamburger menu */}
        <div className="rightcontent">
          <div className="hamburger" onClick={menuOpenHandler}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          
       
          </div>
           </div>
       
      </div>
    </div>
  )
}

export default TopBar
