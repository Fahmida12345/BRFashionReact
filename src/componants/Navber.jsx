import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navber = (props) => {
  const { cart } = props;
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            <HashLink to="/" className="nav-link">
              Home
            </HashLink>
            <HashLink to="/#men" className="nav-link">
              Men's
            </HashLink>
            <HashLink to="/#ladies" className="nav-link">
              Ladies
            </HashLink>
            <HashLink to="/#kid" className="nav-link">
              Kid's
            </HashLink>
          </Nav>

          <div class="user">
            <Link to="/cart">
              <FaCartShopping size={22} />
              <span>{cart.length}</span>
            </Link>
            <Link to="/login">
              <FaUserLarge size={22} />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
