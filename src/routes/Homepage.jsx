import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-router-dom';
import '../styles/homepage.css';

export default function Homepage() {
  return(
    <Container fluid className="homepage">
      <Row className="align-items-center justify-content-center">
        <Col md="auto" className="text-center mt-4">
          <h1 style={{color:"white", textShadow:"0 1px 0 black"}}>Let&apos;s find your next great outfit!</h1>
          <Form action="shop">
            <Button type="submit" variant="dark">Enter Shop</Button>
          </Form>  
        </Col>
      </Row>
    </Container>
  )
}