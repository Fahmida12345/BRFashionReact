import React from 'react'
import Title from '../Title'
import Trendy_card from '../Trendy/Trendy_card'

import img1 from "../../../public/products/kids-frog.jpg"
import img2 from "../../../public/products/kids-t-shirt-1.jpg"
import img3 from "../../../public/products/kids-t-shirt.jpg"
import img4 from "../../../public/products/kids-pants.jpg"
import img5 from "../../../public/products/kids-pants-1.jpg"
import img6 from "../../../public/products/pajama.jpg"
import img7 from "../../../public/products/lady-pajama.jpg"
import img8 from "../../../public/products/jumper.jpg"


const data =[
  {
      img: img1,
      heading: "Sky Blue Kid's Frock",
      price:"99.9$"
  },
  {
      img:img2,
      heading: "Boy's T-Shirt (Black)",
      price:"99.2$",
  },
  {
      img:  img3,
      heading: "Orange T-Shirt (Boy's)",
      price:"39.9$",
  },
  {
      img: img4,
      heading: "Boys Short Pant",
      price:"90.9$"
  },

  {
    img: img5,
    heading: "Red Formal T-Shirt",
    price:"60.9$"
},
  {
    img: img6,
    heading: "Sky Blue Trouser (Boy's)",
    price:"94.9$"
},
  {
    img: img7,
    heading: "Purple Trouser (Girl's)",
    price:"50.9$"
},
  {
    img: img8,
    heading: "Soft Jumper",
    price:"70.9$"
},
];

const Kid = () => {
  return (
    <div id='kid'>
        <div className="container">
            <Title title = "Kid's Colletions" subtitle="Order it for your lovely Babies"/>
            <div className="flex">
                {data.map((item) => {
                        return <Trendy_card data = {item}/>
                    }) }
            </div>
        </div>
    </div>
  )
}

export default Kid