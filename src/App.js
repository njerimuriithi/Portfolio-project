import TopBar from "./Components/TopBar/TopBar";
import Menu from "./Components/Menu/Menu"

//import Contacts from "./Components/Contacts/Contacts"

//import Testimonials from "./Components/Testimonials/Testimonials";
//import Works from "./Components/Works/Works"
import "./App.scss"
import Intro from "./Components/FrontBanner/Intro";
import {useState} from 'react'
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  const [menuOpen , setMenuOpen] = useState(true)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <div className="sections">
        <Intro/>
       <Portfolio/>
       
       {/*
        <Works/>*/}
       
       
    
     
       
      </div>
    </div>
  );
}

export default App;
