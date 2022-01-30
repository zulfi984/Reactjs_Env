import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            placeholder="Search a product"
            style={{ width: 500 }}
          ></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" style={{ margin: 10 }}>
              <FaShoppingCart color="white" fontSize="20px"></FaShoppingCart>
              <Badge bg="inherit">{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ float: "left", minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is empty !</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
