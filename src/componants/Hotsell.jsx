import React from "react";
import Title from "./Title";
import hotimg from "../../public/products/hotimg.jpg";

const Hotsell = () => {
  return (
    <div id="hotsell">
      <div className="container">
        <Title
          title=" Hot Sell "
          subtitle="Order it for you or for your beloved ones"
        />

        <div className="hotcard">
          <div className="left">
            <div class="hot-title">
              <h1>Most Fashionable Women's long Warm Coat</h1>
              <p>Make Your Everyday Fashionable</p>
            </div>
            <ul>
              <li>20% off sale ends October 31</li>
              <li>Local taxes included (where applicable)</li>
              <li>
                British Style Long Wool Coat in Green, Warm Coat Women, Vintage
                Winter Coat, Fit and Flare Solid Coat, Maxi Soft Wool Coat with
                Belt 2842 xiaolizi
              </li>
              <li>5 out of 5 stars</li>
              <li>Returns & exchanges accepted</li>
            </ul>

            <button type="button">Explore More</button>
          </div>
          <div className="right">
            <img src={hotimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotsell;
