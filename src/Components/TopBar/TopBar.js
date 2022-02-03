import React from 'react'
import   "./topBar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


function TopBar({menuOpen,setMenuOpen}) {
  const menuOpenHandler = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="leftcontents">
        <div className="logo">NjeriMuriithi</div>
        <div className="leftItemContainer ">
            <PhoneIcon/>
          <span>+254 717 331 872</span>
        </div>
            <EmailIcon/>
        <div className="itemContainer">
              
          <span>nmuriithi58@gmail.com</span>
        </div>
        </div>
        
        
       
      </div>
    </div>
  )
}

export default TopBar
