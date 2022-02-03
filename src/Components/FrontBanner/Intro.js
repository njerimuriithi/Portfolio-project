import {React,useEffect,useRef} from 'react';
import './Intro.scss'

import { init } from 'ityped'
//useref is equal to document .query selector in vanillaJs to select specific elements
//ityped is a library that allows us to create dynamic texts
function Intro(){

const textRef = useRef();

   useEffect(() => {
    
    init(textRef.current, { 
      showCursor: true, 
      backDelay:  600,
      backSpeed:60,
      strings: ['Designer', 'Developer ','Digital Marketer'], })
  
  
   }, []);
   

  return (
   <div className='intro' id='intro'>
     <div className="leftContainer">
      <div className="wrapper">
        <h2>Hi there I am</h2>
        <h1>Njeri Muriithi</h1>
        <h3>Freelance <span ref={textRef}></span></h3>
      </div>
    </div>
     
    <div className="rightContainer">
      <div className="imageContainer">
      <img src={process.env.PUBLIC_URL +'/Assets/woman.png'} alt="lady photo"/>
      </div>
      
    </div>
    
  </div>
  )
}

export default Intro;
