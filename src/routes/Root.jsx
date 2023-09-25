import { Outlet } from 'react-router-dom'
import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios"

function Root() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const totalCartItems = () => {
    let sum = 0;
    cart.forEach((i) => {
      let num = data.find((prod) => prod.id == i);
      sum = sum + Number(num.quantity);
    })
    return sum
  }

  useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      let updatedResponse = response.data.map((prod) => ({...prod, inCart: false, quantity: 1}))
      setData(updatedResponse);
      console.log(updatedResponse)
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
    getData();
  }, []);

  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary p-3">
      <NavLink to="/" className="navbar-brand"><HomeIcon width="20"/></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-4">
          <NavLink to="/about" className="nav-link">ABOUT</NavLink>
          <NavLink to="/shop" className="nav-link">SHOP</NavLink>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link onClick={console.log(cart)} >
        <ShoppingBagIcon width="20"/>
        <Badge bg="secondary">{totalCartItems()}</Badge>
        <span className="visually-hidden">Items in checkout</span>
      </Nav.Link>
    </Navbar>
    
    <Outlet context={{data, error, loading, setData, cart, setCart}}/>
    </>
  )
}

export default Root
