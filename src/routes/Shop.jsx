import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from "../components/Product"
import LoadingCard from "../components/LoadingCard";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const {data, error, loading, setData, cart, setCart} = useOutletContext();

  const addToCart = (id, newData) => {
    setCart([...cart, id]);
    setData(newData)
  }

  const removeFromCart = (id, newData) => {
    setCart(cart.filter(c => c !== id));
    const newQuantity = newData.map((item) =>{
      if (item.id === id) {
        return {...item, quantity: 1}
      } else {
        return item
      }
    })
    setData(newQuantity)
  }
  
  const handleChange = (e, id) => {
    const newData = data.map((item) =>{
      if (item.id === id) {
        return {...item, quantity: e.target.value};
      } else {
        return item;
      }
    })
    
    setData(newData);
  }

  const handleClick = (id) => {
    const newData = data.map((item) =>{
      if (item.id === id) {
        return {...item, inCart: !item.inCart}
      } else {
        return item
      }
    })
    cart.includes(id) ? removeFromCart(id, newData) : addToCart(id, newData);
  }
  
  if (loading) 
    return (
      <Container>
        <Row className="g-4 m-auto">
          {Array.from({length: 20}).map((_,ind) => (
            <Col key={ind}>
              <LoadingCard />
            </Col>
          ))}
        </Row>
      </Container>  
  )


  return(
    <>
      <Container>
        <Row className="g-4 m-auto">
          {data.map((prod) => (
            <Col key={prod.id}>
              <Product 
                item={prod}
                onChange={(e) => handleChange(e, prod.id)}
                onClick={() => handleClick(prod.id)}
              />
            </Col>
          ))}
        </Row>
      </Container>  
    </>
  )
}