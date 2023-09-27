import { useOutletContext } from "react-router-dom";
import SummaryCard from '../components/SummaryCard';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout() {
  const { handleClick, handleChange, cartProducts } = useOutletContext();
  const products = cartProducts();

  return (
    <>
      <SummaryCard 
        products={products}
        onClick={handleClick}
        onChange={handleChange}
      />
      <CheckoutForm />
    </>
  )
}