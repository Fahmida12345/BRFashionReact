import React from 'react'
import img1 from "../../../public/products/cloth1.jpg"

import { FaCartShopping  } from "react-icons/fa6";




const Trendy_card = (props) => {
  return (
    <div className='card'>
        <img src={props.data.img} alt="" />
        <div className="details">
        <h4>{props.data.heading}</h4>
      
        <div className='pricing'>  <FaCartShopping/> <span>{props.data.price}</span></div>
        </div>
    </div>
  )
}

export default Trendy_card