import React from "react";
import logo from "../../public/logo.png";
import Title from "./Title";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Title
          title=" Know More About Us"
          subtitle="Connect With Us & Happy Shopping"
        />
        <div className="blank"></div>

        <div className="row shop-info">
          <div className="col-lg-6 col-12 com">
            <div className="com-logo">
              <img src={logo} alt="#" />
              <h1>BR Fashion Mart</h1>
            </div>
            <h5>
              Fashion that exists in everything...Fashion never sleeps soo..Wear
              the best.Choose to look classNamey.Cz it was that outfits you are
              looking for.
            </h5>
          </div>

          <div className="col-lg-6 col-12">
            <div className="row right">
              <div className="col-sm-4 col-lg-4 col-12">
                <h4>Discovery</h4>
                <ul>
                  <li>
                    <a href="#">New season</a>
                  </li>
                  <li>
                    <a href="#">Most searched</a>
                  </li>
                  <li>
                    <a href="#">Most selled</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-lg-3 col-12">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-lg-5 col-12">
                <h4>Info</h4>
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policies</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
