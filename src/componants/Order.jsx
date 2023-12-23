import React, { useEffect, useState } from "react";
import { FaCcVisa } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { HiOutlineBanknotes } from "react-icons/hi2";

const Order = (props) => {
  const { cart } = props;
  const [price, setPrice] = useState(0);

  const grandTotal = () => {
    let p = 0;
    cart.map((item) => (p = p + item.price * item.quantiy));

    setPrice(p);
  };

  useEffect(() => {
    grandTotal();
  });
  return (
    <section id="order" className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="wrapper">
              <h1>Your Shipping Address</h1>

              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                class="form-control rounded-0"
                aria-describedby="passwordHelpBlock"
              />

              <label for="phone" class="form-label mt-3">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                class="form-control rounded-0"
                aria-describedby="passwordHelpBlock"
              />

              <label for="phone" class="form-label mt-3">
                Address
              </label>
              <input
                type="text"
                id="phone"
                class="form-control rounded-0"
                aria-describedby="passwordHelpBlock"
              />

              <label for="email" class="form-label mt-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                class="form-control rounded-0"
                aria-describedby="passwordHelpBlock"
              />

              <button
                className="btn btn-dark mt-3 w-100 rounded-0"
                type="submit"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <table class="table">
              <thead class="table-dark">
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.itemName}</td>
                      <td>x{item.quantiy}</td>
                      <td>{item.price}</td>
                      <td>{item.price * item.quantiy}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h2 className="text-end">Grand Total: {price} BDT</h2>

            <div className="payment d-flex flex-wrap justify-content-center  mt-3 fs-5s fw-bold ">
              <div className="paymentBox text-center">
                <FaCcVisa /> Card
              </div>
              <div className="paymentBox text-center">
                <FaMobileAlt /> Mobile Banking
              </div>
              <div className="paymentBox text-center">
                <RiBankFill /> Online Banking
              </div>
              <div className="paymentBox text-center">
                <HiOutlineBanknotes /> COD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
