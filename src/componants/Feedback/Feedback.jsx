import React from 'react'
import Title from '../Title'
import { FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import customer from '../../../public/customer.png';
import customer2 from '../../../public/customer2.png';
import customer1 from "../../../public/customer1.png";


const Feedback = () => {
  return (
    <section id="feedback">
          <div class="container">
                
                <Title title = " Testimonials" subtitle="Some quotes from our happy customers"/> 
                <div class="cards flex">
                
                <div class="card-item">
                <img src ={customer} alt="" />
                    <div class="rating">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStarHalfStroke />
                    </div>
                    <div class="details">
                    <h4>“I just love it! It suites me lot.Feeling thankful”</h4>
                    <p>Zara</p>
                    </div>
                </div>
        
            
                <div class="card-item">
                    <img src={customer2} alt="" />
                    <div class="rating">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStarHalfStroke />
                    </div>
                    <div class="details">
                    <h4>“Racomended for everyone.U have to try.”</h4>
                    <p>Rasel</p>
                    </div>
                
                </div>
            
                <div class="card-item">
                    <img src={customer1}alt="" />
                    <div class="rating">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    </div>
                    <div class="details">
                    <h4>“Comfortable dresses.Simple but looks gorgeous”</h4>
                    <p>Fahmida</p>
                    </div>
                </div>
            </div>
            </div>
               
                    
    </section>
  )
}

export default Feedback