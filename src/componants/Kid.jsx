import React from "react";
import Title from "./Title";
import TrendyCard from "./TrendyCard";
import { allProducts } from "../API";

const Kid = (props) => {
  const { addTocart } = props;
  let kidsFilter = allProducts.filter((p) => p.catagory === "kid");

  return (
    <div id="kid">
      <div className="container">
        <Title
          title="Kid's Colletions"
          subtitle="Order it for your lovely Babies"
        />
        <div className="row">
          {kidsFilter.map((item, index) => {
            return <TrendyCard data={item} key={index} addTocart={addTocart} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Kid;
