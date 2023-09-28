import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form as ReactForm} from "react-router-dom";
import Shipping from './Shipping';
import Billing from './Billing';
import Payment from './Payment';

export default function CheckoutForm() {
  const [open, setOpen] = useState(true);

  return (
    
    <Container className="mt-3 pb-3">
      <Shipping status={open} onClick={setOpen}/>
      <Billing status={open}/>
      <Payment />
      <Container className="d-flex justify-content-between bg-light p-2 rounded">
        <ReactForm action="/shop">
          <Button type="submit" variant="secondary">Continue Shopping</Button>
        </ReactForm>
        <ReactForm action="/confirmation">
          <Button type="submit" variant="success">Submit</Button>
        </ReactForm>
      </Container>
    </Container>
  )
}