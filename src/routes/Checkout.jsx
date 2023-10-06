import { useOutletContext } from "react-router-dom";
import SummaryCard from '../components/SummaryCard';
import CheckoutForm from '../components/CheckoutForm';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { handleClick, handleChange, cartProducts } = useOutletContext();
  const products = cartProducts();

  return (
    products.length == 0 ? 
    <Container className="bg-light rounded mt-3 p-3 text-center">
      <h6><i>You have no items in your cart.</i></h6>
      <Link to="/shop" className="btn btn-secondary">Back to Shopping</Link>
    </Container>      
      :
    <Container fluid className="d-xxl-flex flex-row-reverse">
      <SummaryCard 
        products={products}
        onClick={handleClick}
        onChange={handleChange}
      />
      
      <Container className="mt-3 pb-3 flex-grow-1">  
        <CheckoutForm />
        <Container className="d-flex justify-content-between bg-light p-2 rounded">
          <Link to="/shop" className="btn btn-secondary">
            Continue Shopping
          </Link>
          <Link to="/confirmation" className="btn btn-success">
            Submit
          </Link>
        </Container>
      </Container>
    </Container>
  )
}