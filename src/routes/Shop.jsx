import Container from "react-bootstrap/Container";
import Product from "../components/Product"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Shop() {
  return(
    <>
      <h1 className="text-center">This is the shopping page.</h1>
      <Container>
        <Row className="g-4 m-auto">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Product />
            </Col>
          ))}
        </Row>
      </Container>  
    </>
  )
}