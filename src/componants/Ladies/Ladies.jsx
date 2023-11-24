import React from 'react'

import img1 from "../../../public/products/cloth1.jpg"
import img2 from "../../../public/products/cloth2.jpg"
import img3 from "../../../public/products/cloth3.jpg"
import img4 from "../../../public/products/jama.jpg"
import img5 from "../../../public/products/jama1.jpg"
import img6 from "../../../public/products/jama2.jpg"
import img7 from "../../../public/products/saree.jpg"
import img8 from "../../../public/products/saree1.jpg"
import Title from '../Title'
import Trendy_card from '../Trendy/Trendy_card'

const data =[
    {
        img: img1,
        heading: "Woman's Overcoat (Grey)",
        price:"199.9$"
    },
    {
        img:img2,
        heading: "Woman's Overcoat (Black)",
        price:"99.2$",
    },
    {
        img:  img3,
        heading: "Stylish Overcoat (Woman) Mint",
        price:"199.9$",
    },
    {
        img: img4,
        heading: " Kamiz (Red)",
        price:"90.9$"
    },
  
    {
      img: img5,
      heading: "Blue Kamiz",
      price:"90.9$"
  },
    {
      img: img6,
      heading: "Kamiz (Light Blue)",
      price:"90.9$"
  },
    {
      img: img7,
      heading: "Kamiz (Light Blue)",
      price:"90.9$"
  },
    {
      img: img8,
      heading: "Saree (Red)",
      price:"90.9$"
  },
  ];

const Ladies = () => {
  return (
    <div id="ladies">
        <div className="container">
            {/* sending props */}
            <Title title = "Ladies Colletions" subtitle = "Order it for you & for your lovely Girl"/>
            <div className="flex">
                {data.map((item) => {
                    return <Trendy_card data ={item}/>
                })}
          </div>
      </div>
    </div>
  )
}

export default Ladies