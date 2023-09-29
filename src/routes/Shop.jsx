import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from "../components/Product"
import LoadingCard from "../components/LoadingCard";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const {data, error, loading, handleClick, handleChange} = useOutletContext();

  if (loading) 
    return (
      <Container className="shop mb-4">
        <Row className="g-4 m-auto">
          {Array.from({length: 20}).map((_,ind) => (
            <Col xs={12} md={6} lg={4} xxl={3} key={ind}>
              <LoadingCard />
            </Col>
          ))}
        </Row>
      </Container>  
  )

  return(
    <>
      <Container className="shop pb-4">
        <Row className="g-4 m-auto">
          {data.map((prod) => (
            <Col md={6} lg={4} xxl={3} key={prod.id}>
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