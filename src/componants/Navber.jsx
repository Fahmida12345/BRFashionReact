import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="./">
          <img src="/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">Men's</Link>
            <Link className="nav-link">Ladies</Link>
            <Link className="nav-link">Kid's</Link>
          </Nav>

          <div class="user">
            <a href="">
              <FaCartShopping size={18} />
            </a>
            <a href="">
              <FaUserLarge size={18} />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
