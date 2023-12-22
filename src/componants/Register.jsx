import React from "react";

const Register = () => {
  return (
    <form action="" className="w-75 mx-auto my-5">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid" src="products/hotimg.jpg" alt="" />
        </div>
        <div className="col-lg-6 p-3">
          <div className="wrapper">
            <h1>Register</h1>

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
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
