import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import homeImage from '../assets/homepage.jpg'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-router-dom';


export default function Homepage() {
  return(
    <Container fluid>
      <h1 className="text-center m-4">Shopping Cart App</h1>
      <Row className="align-items-center justify-content-center">
        <Col md="auto">
          <Image style={{maxWidth: "500px"}} src={homeImage}/> 
        </Col>
        <Col md="auto" className="text-center">
          <h4>Let&apos;s find your next great outfit!</h4>
          <Form action="shop">
            <Button type="submit">Enter Shop</Button>
          </Form>  
        </Col>
      </Row>
    </Container>
  )
}