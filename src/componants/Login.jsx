import React from "react";
import { FaGoogle, FaApple, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form action="" className="w-75 mx-auto my-5">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid" src="products/hotimg.jpg" alt="" />
        </div>
        <div className="col-lg-6 p-3">
          <div className="wrapper">
            <h1>Login</h1>

            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="form-control rounded-0"
              aria-describedby="passwordHelpBlock"
            />
            <label for="inputPassword5" class="form-label mt-3">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control rounded-0"
              aria-describedby="passwordHelpBlock"
            />

            <button className="btn btn-dark mt-3 w-100 rounded-0" type="submit">
              Login
            </button>

            <p className="my-4 text-center fs-5">OR</p>

            <div className="soialLinks">
              <a href="">
                <FaGoogle size={30} style={{ color: "black" }} />
              </a>
              <a href="">
                <FaApple size={35} style={{ color: "black" }} />
              </a>
              <a href="">
                <FaTwitter size={30} style={{ color: "black" }} />
              </a>
            </div>

            <a className="forgetPass" href="#">
              Forget Password?
            </a>

            <Link to="/register" className="btn btn-dark mt-5 w-100 rounded-0">
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
