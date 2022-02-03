import React from 'react';
import './Works.scss'
//import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Works() {
  return <div className="worksContainer" id="Works">
    <div className='slider'>
      <div className='container'>
 <div className='workItem'>
   <div className='left'>
    <div className='leftContainer'>
      <div className='imgContainer'>
        <img src={process.env.PUBLIC_URL +'/Assets/Phone.png'}/>
      </div>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
         Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          </p>
          <span>projects</span>
    </div>
   </div>
   {/* right container*/ }
   <div className='right'>
     <img src={process.env.PUBLIC_URL +'/Assets/web.jpg'}/>
   </div>
 </div>
      </div>
    </div>
  
    
  </div>;
}

export default Works;
