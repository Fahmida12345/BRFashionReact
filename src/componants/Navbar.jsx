import React from 'react'
import { FaCartShopping, FaUser   } from "react-icons/fa6";
import logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className='container'>
   <div className="flex">
      <img src={logo} alt="" />
      <ul>
          <li >
            <a href="#">Home</a>
          </li>
          <li >
            <a  href="#">Men's</a>
          </li>
          <li>
            <a href="#">Ladies</a>
          </li>
          <li >
            <a  href="#">Kid's</a>
          </li>
        </ul>
        <div className="user">
        <FaCartShopping/>
        <FaUser />
        </div>
   </div>
        
    </div>

    </nav>
    );
}

export default Navbar