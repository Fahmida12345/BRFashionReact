import React from 'react'
import img1 from "../../../public/products/tshirt.jpg"
import img2 from "../../../public/products/tshirt1.jpg"
import img3 from "../../../public/products/formal-shirt.jpg"
import img4 from "../../../public/products/formal-shirt1.jpg"
import img5 from "../../../public/products/men-cort.jpg"
import img6 from "../../../public/products/fullshirt.jpg"
import img7 from "../../../public/products/men-cort1.jpg"
import img8 from "../../../public/products/fullshirt1.jpg"
import Title from '../Title'
import Trendy_card from '../Trendy/Trendy_card'

const data =[
  {
      img: img1,
      heading: "Strip T-Shirt",
      price:"99.9$"
  },
  {
      img:img2,
      heading: "Soft T-Shirt",
      price:"99.2$",
  },
  {
      img:  img3,
      heading: "Gent's Fomal Shirt (Mint)",
      price:"199.9$",
  },
  {
      img: img4,
      heading: " Gent's Fomal Shirt (Mint)",
      price:"90.9$"
  },

  {
    img: img5,
    heading: "Red Formal T-Shirt",
    price:"90.9$"
},
  {
    img: img6,
    heading: "Light Grey Men's Coat",
    price:"90.9$"
},
  {
    img: img7,
    heading: "Black Men's Cort",
    price:"90.9$"
},
  {
    img: img8,
    heading: "Gent's Full T-Shirt (Mint)",
    price:"90.9$"
},
];


const Mens = () => {
  return (
    <div id='men'>
          <div className="container">
      {/* sending props */}
      <Title title = "Men's Colletions" subtitle = "Order it for you & for your lovely Men"/>
      <div className="flex">
      {data.map((item) => {
        return <Trendy_card data ={item}/>
      })}

      </div>
    </div>
    </div>
  )
}

export default Mens