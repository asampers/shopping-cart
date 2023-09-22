import { Outlet } from 'react-router-dom'
import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function Root() {
  
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
      <Nav.Link href="#link" ><ShoppingBagIcon width="20"/></Nav.Link>
    </Navbar>
    
    <Outlet />
    </>
  )
}

export default Root
