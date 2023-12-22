import React from "react";
import Title from "./Title";
import { allProducts } from "../API";
import TrendyCard from "./TrendyCard";

const Men = (props) => {
  const { addTocart } = props;
  let menFilter = allProducts.filter((p) => p.catagory === "men");

  return (
    <section id="men">
      <div className="container">
        <Title
          title="Men's Collections"
          subtitle="Order it for you & for your lovely Man"
        />
        <div className="row">
          {menFilter.map((item, index) => {
            return <TrendyCard data={item} key={index} addTocart={addTocart} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Men;
