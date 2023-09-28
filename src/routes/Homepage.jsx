import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import homeImage from '../assets/homepage.jpg'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-router-dom';
import '../styles/homepage.css';

export default function Homepage() {
  return(
    <Container fluid className="homepage">
      <Row className="align-items-center justify-content-center">
        <Col md="auto" className="text-center mt-4">
          <h1>Let&apos;s find your next great outfit!</h1>
          <Form action="shop">
            <Button type="submit">Enter Shop</Button>
          </Form>  
        </Col>
      </Row>
    </Container>
  )
}