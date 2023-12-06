import React from "react";
import Title from "./Title";
import TrendyCard from "./TrendyCard";

const Kid = () => {
  let kidsFilter = allProducts.filter((p) => p.catagory === "kids");

  return (
    <div id="kid">
      <div className="container">
        <Title
          title="Kid's Colletions"
          subtitle="Order it for your lovely Babies"
        />
        <div className="row">
          {kidsFilter.map((item, index) => {
            return <TrendyCard data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Kid;
