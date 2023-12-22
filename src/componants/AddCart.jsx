import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCart = (props) => {
  const { cart, addCart, quantity } = props;

  const [price, setPrice] = useState(0);

  const grandTotal = () => {
    let p = 0;
    cart.map((item) => (p = p + item.price * item.quantiy));

    setPrice(p);
  };

  useEffect(() => {
    grandTotal();
  });

  const deleteItem = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    addCart(updateCart);
    toast.error("Item Removed From Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <section id="cartPage" className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Keep Your Items In Cart</h2>
          </div>
          <div className="col-6">
            <p className="text-end fw-bold fs-4 text-danger">
              {cart.length} Items
            </p>
          </div>
        </div>

        {cart.length == 0 ? (
          <div class="alert alert-danger" role="alert">
            <h1 className="text-center">Your Cart Is Empty !</h1>
          </div>
        ) : (
          cart.map((item, index) => {
            return (
              <div className="row my-5 list p-3 rounded">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-3 col-sm-3 col-12">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-6">
                      <h4 className="item-name p-0 m-0">{item.itemName}</h4>
                      <h4 className="item-price p-0 m-0 my-2">
                        Price: BDT {item.price}
                      </h4>

                      <button onClick={() => quantity(item, 1)}>+</button>
                      <button disabled>{item.quantiy}</button>
                      <button onClick={() => quantity(item, -1)}>-</button>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-6">
                      <h2 className="text-danger fw-bold fs-4 p-0 mb-3">
                        Sub: BDT {item.price * item.quantiy}
                      </h2>

                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteItem(item.id);
                        }}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}

        <div className="row">
          <div className="col-8">
            <h2 className="m-0 p-0 text-danger">Grand Total: {price} BDT</h2>
          </div>
          <div className="col-4">
            <Link
              to="/order"
              className={`btn ${
                cart.length == 0 ? "btn-danger" : "btn-warning"
              } ms-auto d-block w-50 ${cart.length == 0 ? "disabled" : ""}`}
            >
              Place Your Order
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AddCart;
