import { useOutletContext } from "react-router-dom";
import SummaryCard from '../components/SummaryCard';
import CheckoutForm from '../components/CheckoutForm';
import Container from "react-bootstrap/Container";

export default function Checkout() {
  const { handleClick, handleChange, cartProducts } = useOutletContext();
  const products = cartProducts();

  return (
    <>
      <Container fluid className="d-xxl-flex flex-row-reverse">
      <SummaryCard 
        products={products}
        onClick={handleClick}
        onChange={handleChange}
      />
      <CheckoutForm />
      </Container>
    </>
  )
}