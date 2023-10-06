import { useState } from 'react';
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