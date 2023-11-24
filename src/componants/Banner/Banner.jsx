import React from 'react';
import banner_img from "../../../public/banner.jpg";

const Banner = () => {
  return (
    <section id="banner">
      {/* <img src={banner_img} alt="" /> */}
        <div className ='container'>
        <div class="wrapper">
        <h1>The Fashion Haven</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ea rem maiores laudantium eveniet molestias laborum neque
          necessitatibus saepe nemo.
        </p>
        <button type="button">Discovery our collection</button>
      </div>

        </div>

    </section>
  )
}

export default Banner