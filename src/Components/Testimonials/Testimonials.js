import React from 'react'
import './testimonials.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Testimonials() {
const testimonials =[
  {
    id:1,
    name:"Ashley",
    img:"/Assets/ladyReview.jpg",
    title:"CEO ,Google",
    description:"loremloremloremloremloremloremloremlorem",
    featured:false,
  },
  {
    id:2,
    name:"Waithaka",
    img:"/Assets/firstReview.jpg",
    title:"Project manager microsoft",
    description:"loremloremloremloremloremloremloremlorem",
    featured:true,
  },
  {
    id:3,
    name:"Brian Omondi",
    img:"/Assets/secondMan.jpg",
    title:"CEO , Microsoft",
    description:"loremloremloremloremloremloremloremlorem",
    featured:false,
  },
]

  return (
    <div className="testimonialsContainer" id="testimonials">
    <h1>Testimonials</h1>
    <div className='container'>
      {testimonials.map((T)=>(
          <div className={T.featured ? 'card featured':'card'}>        
          <div className='top'>
            
            <img 
            className='user'
            src={T.img}/>
          </div>
          <div className='center'>
         {T.description}
          </div>
          <div className='bottom'>
            <h3>{T.name}</h3>
            <h4>{T.title}</h4>
          </div>
                </div>
              

      ))}
    </div>
    
    </div>
    
  )
}

export default Testimonials
