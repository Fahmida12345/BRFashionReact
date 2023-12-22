import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from "./componants/Navber";
import Home from "./componants/Home";
import Footer from "./componants/Footer";
import Copyright from "./componants/Copyright";
import Product from "./componants/Product";
import Login from "./componants/Login";
import Register from "./componants/Register";
import AddCart from "./componants/AddCart";
import Order from "./componants/Order";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Responsive.css";
import ErrorPage from "./componants/ErrorPage";

function App() {
  const [cart, addCart] = useState([]);

  const addTocart = (item) => {
    addCart([...cart, item]);
    console.log(cart);

    toast.success("Item Added To Cart", {
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

  const quantity = (item, n) => {
    let ind = cart.indexOf(item);
    let arr = cart;

    arr[ind].quantiy = arr[ind].quantiy + n;

    if (arr[ind].quantiy == 0) {
      arr[ind].quantiy = 1;
    }

    addCart([...arr]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <>
      <BrowserRouter>
        <Navber cart={cart} />
        <Routes>
          <Route path="/" element={<Home addTocart={addTocart} />} />
          <Route path="/product/:itemID" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order cart={cart} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/cart"
            element={
              <AddCart cart={cart} quantity={quantity} addCart={addCart} />
            }
          />
        </Routes>
        <Footer />
        <Copyright />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
