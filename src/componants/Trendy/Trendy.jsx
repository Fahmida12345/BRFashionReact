import React from 'react'
import img1 from "../../../public/products/cloth1.jpg"
import img2 from "../../../public/products/cloth2.jpg"
import img3 from "../../../public/products/formal-shirt.jpg"
import img4 from "../../../public/products/jama.jpg"
import img5 from "../../../public/products/kids-frog.jpg"
import img6 from "../../../public/products/fullshirt.jpg"
import img7 from "../../../public/products/jama1.jpg"
import img8 from "../../../public/products/kids-pants.jpg"

import Trendy_card from './Trendy_card'
import Title from '../Title'


const data =[
    {
        img: img1,
        heading: "Woman's Overcoat (Grey)",
        price:"99.9$"
    },
    {
        img:img2,
        heading: "Woman's Overcoat (Grey)",
        price:"99.2$",
    },
    {
        img:  img3,
        heading: "Gent's Fomal Shirt (Mint)",
        price:"199.9$",
    },
    {
        img: img4,
        heading: " Formal Kamiz(Red)",
        price:"90.9$"
    },

    {
      img: img5,
      heading: "Sky Blue Kid's Frock",
      price:"90.9$"
  },
    {
      img: img6,
      heading: "Gent's Full T-Shirt (Mint)",
      price:"90.9$"
  },
    {
      img: img7,
      heading: "Blue Kamiz",
      price:"90.9$"
  },
    {
      img: img8,
      heading: "Boys Short Pant",
      price:"90.9$"
  },
];


const Trendy = () => {
  return (
  <section id="trendy">
    <div className="container">
      {/* sending props */}
      <Title title = "Trendy Products" subtitle = "Order it for you or for your beloved ones"/>
      <div className="flex">
      {data.map((item)=>{
        return <Trendy_card data ={item}/>;
      })}


      </div>
    </div>
  </section>
  )
}

export default Trendy