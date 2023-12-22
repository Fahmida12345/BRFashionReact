import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const TrendyCard = (props) => {
  const { id, itemName, img, price } = props.data;
  const { addTocart } = props;

  const handleCart = (item) => {
    addTocart(item);
  };

  return (
    <div className=" col-sm-6 col-lg-3 col-12">
      <div className="card-item">
        <Link to={`/product/${id}`}>
          <img src={img} alt={itemName} />
        </Link>
        <div className="details">
          <Link to={`/product/${id}`} className="item-name">
            {itemName}
          </Link>
          <div className="price">
            <button onClick={() => handleCart(props.data)}>
              <FaCartShopping />
            </button>
            <span>{price} BDT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendyCard;
