import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
//import Menu from "./Components/Menu/Menu"

import Contacts from "./Components/Contacts/Contacts"

import Testimonials from "./Components/Testimonials/Testimonials";
//import Works from "./Components/Works/Works"
import "./App.scss"
import Intro from "./Components/FrontBanner/Intro";
import {useState} from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  const [menuOpen , setMenuOpen] = useState(true)
  return (
    <BrowserRouter>
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <div className="sections">
      <Navbar/>
      <Routes>
        
      <Route path="/" element={<Intro/>} exact/>
      <Route path ="portfolio" element={<Portfolio/>}/>
      <Route path="testimonials" element={<Testimonials/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        </Routes>
    
      
       {/*
        
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Intro/>
    
       
      
       
        >*/}
       
       
      
     
       
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
