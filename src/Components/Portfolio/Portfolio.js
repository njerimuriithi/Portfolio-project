import React, { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Portfolio.scss'
import {
  featuredPortfolio,webPortfolio
} from '../../data'

function Portfolio() {
  const [selected , setSelected] = useState("featured")
  const [data , setData] = useState([])
  const List =[
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"web",
      title:"WebApps"
    },

  ]

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
        setData(webPortfolio);
        break;
        default:
          setData(featuredPortfolio)
    }
   
  }, [selected]);
  
  return <div className="portfolioContainer">
      <h1>Projects</h1>
     <ul>
         {List.map((items) => (
           <PortfolioList 
           title={items.title}
           active ={selected === items.id}
           setSelected={setSelected}
           id={items.id}
           />
         ))}
     </ul>
     <div className = "container">
       {data.map((dt)=>(
         <div className='item'>
         <img src={dt.img}/>
         <h2>{dt.title}</h2>
       </div>

       ))}
       
        </div>
  </div>;
}

export default Portfolio;
