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