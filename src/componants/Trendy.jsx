import React from "react";
import Title from "./Title";
import { allProducts } from "../API";
import TrendyCard from "./TrendyCard";

const Trendy = (props) => {
  const { addTocart } = props;
  const trendyFilter = allProducts.filter((p) => p.rank === "trendy");
  //   console.log(trendyFilter);

  return (
    <section id="trendy">
      <div className="container">
        <Title
          title="Trendy Products"
          subtitle="Order it for you or for your beloved ones"
        />

        <div className="row">
          {trendyFilter.map((item, index) => {
            return <TrendyCard data={item} key={index} addTocart={addTocart} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Trendy;
