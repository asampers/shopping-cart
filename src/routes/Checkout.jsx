import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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