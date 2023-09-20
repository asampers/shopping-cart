import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationHeader() {
  return(
    <>
    <Navbar expand="md" className="bg-body-tertiary p-3">
      <Navbar.Brand href="#home"><HomeIcon width="20"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-4">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#link">ABOUT</Nav.Link>
          <Nav.Link href="#link">SHOP</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Nav.Link href="#link" style={{left: "auto"}} className="fixed-top p-4"><ShoppingBagIcon width="20"/></Nav.Link>
    </>
  )
}