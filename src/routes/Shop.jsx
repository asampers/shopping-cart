import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Product from "../components/Product"
import axios from "axios"

export default function Shop() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
      console.log(response.data)
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);
  
  if (!loading)
  return(
    <>
      <h1 className="text-center">This is the shopping page.</h1>
      <Container>
        <Row className="g-4 m-auto">
          {data.map((prod) => (
            <Col key={prod.id}>
              <Product item={prod} />
            </Col>
          ))}
        </Row>
      </Container>  
    </>
  )
}