import React from "react";

import Banner from "./Banner";
import Trendy from "./Trendy";
import Hotsell from "./Hotsell";
import Men from "./Men";
import Ladies from "./Ladies";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <Trendy />
      <Hotsell />
      <Men />
      <Ladies />
      <Feedback />
    </div>
  );
};

export default Home;
