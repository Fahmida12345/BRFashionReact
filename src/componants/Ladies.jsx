import React from "react";
import Title from "./Title";
import TrendyCard from "./TrendyCard";
import { allProducts } from "../API";

const Ladies = () => {
  let ladiesFilter = allProducts.filter((p) => p.catagory === "woman");
  return (
    <section id="ladies">
      <div className="container">
        {/* sending props */}
        <Title
          title="Ladies Colletions"
          subtitle="Order it for you & for your lovely Girl"
        />
        <div className="row">
          {ladiesFilter.map((item, index) => {
            return <TrendyCard data={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Ladies;
