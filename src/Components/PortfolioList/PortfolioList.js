import React from 'react';
import './PortfolioList.scss'
function PortfolioList({title,active,setSelected,id}) {
    const selectedHandler = () =>{
        setSelected(id)
    }
  return <div>
       <li  className={active?'active  PortfolioList':"PortfolioList"}
       onClick={selectedHandler}>
           {title}
       </li>
       
  </div>;
}

export default PortfolioList;
