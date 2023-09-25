import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from "../components/Product"
import LoadingCard from "../components/LoadingCard";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const {data, error, loading, setData} = useOutletContext();
  
  const handleChange = (e, index) => {
    const newData = data.map((item, i) =>{
      if (i === index) {
        return {...item, quantity: e.target.value}
      } else {
        return item
      }
    })

    setData(newData);
  }

  const handleClick = (index) => {
    const newData = data.map((item, i) =>{
      if (i === index) {
        return {...item, inCart: !item.inCart}
      } else {
        return item
      }
    })

    setData(newData);
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
          {data.map((prod, ind) => (
            <Col key={prod.id}>
              <Product 
                item={prod}
                onChange={(e) => handleChange(e, ind)}
                onClick={() => handleClick(ind)}
              />
            </Col>
          ))}
        </Row>
      </Container>  
    </>
  )
}