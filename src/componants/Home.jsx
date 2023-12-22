import React from "react";

import Banner from "./Banner";
import Trendy from "./Trendy";
import Hotsell from "./Hotsell";
import Men from "./Men";
import Ladies from "./Ladies";
import Feedback from "./Feedback";
import Kid from "./Kid";

const Home = (props) => {
  const { addTocart } = props;
  return (
    <div>
      <Banner />
      <Trendy addTocart={addTocart} />
      <Hotsell />
      <Men addTocart={addTocart} />
      <Ladies addTocart={addTocart} />
      <Kid addTocart={addTocart} />
      <Feedback />
    </div>
  );
};

export default Home;
