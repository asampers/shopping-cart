import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Shipping from './Shipping';
import Billing from './Billing';
import Payment from './Payment';

export default function CheckoutForm() {
  const [open, setOpen] = useState(true);

  return (
    
    <Container className="mt-3 pb-3 flex-grow-1">
      <Shipping status={open} onClick={setOpen}/>
      <Billing status={open}/>
      <Payment />
      <Container className="d-flex justify-content-between bg-light p-2 rounded">
        <Link to="/shop" className="btn btn-secondary">
          Continue Shopping
        </Link>
        <Link to="/confirmation" className="btn btn-success">
          Submit
        </Link>
      </Container>
    </Container>
  )
}