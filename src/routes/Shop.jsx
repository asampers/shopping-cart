import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Product from "../components/Product"
import LoadingCard from "../components/LoadingCard";
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
              <Product item={prod} />
            </Col>
          ))}
        </Row>
      </Container>  
    </>
  )
}