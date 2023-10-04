import CheckoutCard from "../components/CheckoutCard";
import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios"

function Root() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const cartQuantity = () => {
    let sum = 0;
    cart.forEach((i) => {
      let num = data.find((prod) => prod.id == i);
      sum = sum + Number(num.quantity);
    })
    return sum
  }

  const cartProducts = () => {
    const products = cart.map((i) => {return data.find((prod) => prod.id == i)})
    return products;
  }

    const addToCart = (id, newData) => {
    setCart([...cart, id]);
    setData(newData)
  }

  const removeFromCart = (id, newData) => {
    setCart(cart.filter(c => c !== id));
    const newQuantity = newData.map((item) =>{
      if (item.id === id) {
        return {...item, quantity: 1}
      } else {
        return item
      }
    })
    setData(newQuantity)
  }
  
  const handleChange = (e, id) => {
    const newData = data.map((item) =>{
      if (item.id === id) {
        return {...item, quantity: e.target.value};
      } else {
        return item;
      }
    })
    
    setData(newData);
  }

  const handleClick = (id) => {
    const newData = data.map((item) =>{
      if (item.id === id) {
        return {...item, inCart: !item.inCart}
      } else {
        return item
      }
    })
    cart.includes(id) ? removeFromCart(id, newData) : addToCart(id, newData);
  }

  useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      let updatedResponse = response.data.map((prod) => ({...prod, inCart: false, quantity: 1}))
      setData(updatedResponse);
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
      <Navbar expand="md" className="bg-body-tertiary p-3 rounded-bottom">
      <Link to="/" className="navbar-brand"><HomeIcon width="20"/></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-4">
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/shop" className="nav-link">SHOP</Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link onClick={toggleShow}>
        <ShoppingBagIcon width="20"/>
        <Badge bg="secondary">{cartQuantity()}</Badge>
        <span className="visually-hidden">Items in checkout</span>
      </Nav.Link>
    </Navbar>
    {location.pathname !== "/checkout" && <CheckoutCard
      status={show ? "visible" : "hidden"}
      toggle={toggleShow} 
      products={cartProducts()} 
      onClick={handleClick} 
      onChange={handleChange}
    />}
    
    <Outlet context={{data, error, loading, handleClick, handleChange, cartProducts}}/>
    </>
  )
}

export default Root;
