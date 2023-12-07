import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { allProducts } from "../API";

const Product = () => {
  const { itemID } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    let itemFilter = allProducts.filter((p) => p.id == itemID);
    setItem(itemFilter[0]);

    console.log(item);
  }, []);
  return (
    <section id=" display">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={item.img} alt="" />
          </div>
          <div className="col-lg-8">
            <h5>
              Catagory: <span className="text-danger">{item.catagory}</span>
            </h5>
            <h1>{item.itemName}</h1>
            <h3>
              <span>{item.rank}</span>
            </h3>
            <h5 className="text-warning">
              {item.rating} <FaStar /> Rating
            </h5>
            <p>{item.about}</p>
            <h2 className="text--danger fw-bold my-5">BDT {item.price} Only</h2>

            <button className="btn btn-dark px-4 py-2 me-2 rounded-0">
              Add Cart
            </button>
            <button className="btn btn-warning px-4 py-2 me-2 rounded-0">
              Buy Now
            </button>
            <button className="btn btn-info px-4 py-2 me-2 rounded-0">
              Share Now
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h1>About {item.itemName}</h1>
            <hr />
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
