import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Shipping from './Shipping';
import Billing from './Billing';
import Payment from './Payment';

export default function CheckoutForm() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Shipping status={open} onClick={setOpen}/>
      <Billing status={open}/>
      <Payment />
    </>
  )
}